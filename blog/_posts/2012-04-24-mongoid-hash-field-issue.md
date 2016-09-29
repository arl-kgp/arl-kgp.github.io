---
layout: post
---

Mongoid Hash field Issue
========================

<p class="date">24 Apr 2012 - Bangalore, India</p>

Mongodb is one of the most popular document-based databases due to it’s simplicity of use and speed.

I’ve been working with mongodb for more than a year now and it’s been quite awesome. No useless mysql queries, no joins, no “mysql-scalability” problems. It supports Hash and Array field types, has replication out-of-the-box, has a cool master-slave configuration which just works (unlike riak, which just seems confused).

Mongoid is my ODM choice as when I started out, Mongoid fully supported Rails 3 and used ActiveModel etc. whereas MongoMapper was still using the “validatable” gem, which meant they were inexplicably behind the curve.

To be honest, inspite of Mongoid being as brilliant as it is, it is still a work a progress. There are still issues, some of which are quite major ones.

Here’s one such issue I faced a while back.

<!-- more start -->

#### _Issue_

Modifying a Hash that lives in enumerable data has a weird behaviour. Updating a Hash value does not seem to be possible although Mongoid does not throw out an error.

    class SomeClass
      include Mongoid::Document
      field :test, :type => Hash
    end
<p></p>
    sc = SomeClass.create:)test => {:value => {}})

    sc.test["value"]["new_hash"] = "new_value"

    sc.save!

    # Looks Fine
    sc.test["value"]

    # Reloading Object
    sc = SomeClass.last
    sc.test["value"]

    # WTF! Where did my value go!
    # => {}

#### _Reason_

When test is called from the sc object, Mongoid does a #dup and send you that copy. So, when you update the Hash, both these are updated and when Mongoid wants to save the Hash, it “thinks” that there is no change as both the copy and actual values are the same.

#### _Workaround_

Doing a deep copy will fix this issue. This will have a performance hit but if you want to update your Hash, you need to do this.

I found this reusable code in one if the Mongoid Issues:

In **config/initializers/service.rb**:

    require 'service'
    class Object
      include Service::DeepCopyable
    end

In **lib/service.rb**:

    module Service
      module DeepCopyable
        def grab_copy
          Marshal.load(Marshal.dump(self))
        end
      end
    end

You can save your Hash now.

    class Registrant
      include Mongoid::Document

      field :rgt_key, type: String
      field :nf_registrant, type: Hash

      before_save :check_keys

      def check_keys
        if self.rgt_key_changed?
          self.nf_registrant = self.nf_registrant.grab_copy
          self.nf_registrant["Registrant"]["reg_rgt_key"] = self.rgt_key
        end
      end
    end

<!-- more end -->
