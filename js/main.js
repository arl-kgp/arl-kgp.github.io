let btn = document.getElementsByClassName("nav-link");
let btn1 = [], btn2 = [], btn3 = [], btn4 = [];
for (let i = 5; i < 7; i++) {
  btn1.push(btn[i]);
  btn2.push(btn[i + 2]);
  btn3.push(btn[i + 4]);
}
for (let i = 11; i < 15; i++) {
  btn4.push(btn[i]);
}

console.log(btn1);
let flag1 = 0;
btn1[0].addEventListener('click', function run() {
  if (flag1 != 0) {
    btn1[0].classList.toggle("active");
    btn1[flag1].classList.toggle("active");
    flag1 = 0;
    let ele = document.getElementById("soft1");
    ele.innerHTML = `<h5 class="card-title">Object Detection and Tracking</h5>
            <p class="card-text">Object detection and tracking is widely used with applications in monitoring and
              surveillance. In IARC, the task requires us to guide ground robots towards a line. We plan to use a
              fisheye lens to see the whole arena and then track the ground robots, maintaining the trackers even
              when they are out of field of view. We are using Kalman filter for the tracking on the linear model of
              motion of the ground robots.</p>
            <img src="Design/kalman.jpg" style="width: 55vw" alt="">`;
  }
});
btn1[1].addEventListener('click', function run() {
  if (flag1 != 1) {
    btn1[1].classList.toggle("active");
    btn1[flag1].classList.toggle("active");
    flag1 = 1;
    let ele = document.getElementById("soft1");
    ele.innerHTML = `<h5 class="card-title">Ground Truth Validation</h5>
            <p class="card-text">A true value of the robots position and orientation is a necessary metric to compare our algorithms of self estimation, detection and tracking. We are using two high-definition cameras fixed on the arena frame to get the depth of the desired object which will then be transformed into a global coordinate system of the arena.</p>
            <img src="Design/depth.png" style="width: 45vw" alt="">`;
  }
});


console.log(btn2);
let flag2 = 0;
btn2[0].addEventListener('click', function run() {
  if (flag2 != 0) {
    btn2[0].classList.toggle("active");
    btn2[flag2].classList.toggle("active");
    flag2 = 0;
    let ele = document.getElementById("soft2");
    ele.innerHTML = `<h5 class="card-title">Grid Based Localization</h5>
          <p class="card-text">IARC is held in an indoor GPS denied environment so localization is a major
            challenge. IARC provides grids on the ground which can be detected and used to localize.</p>
          <img src="Design/grid.jpg" style="width: 35vw" alt="">`;
  }
});
btn2[1].addEventListener('click', function run() {
  if (flag2 != 1) {
    btn2[1].classList.toggle("active");
    btn2[flag2].classList.toggle("active");
    flag2 = 1;
    let ele = document.getElementById("soft2");
    ele.innerHTML = `<h5 class="card-title">Optical Flow Localisation</h5>
            <p class="card-text">Optical flow is the pattern of apparent motion of objects, surfaces, and edges in a visual scene caused by the relative motion between an observer (an eye or a camera) and the scene. From the optical flow of a video feed, a path and trajectory of robot motion can be inversely computed, which is one of the most widely used ways of localisation in GPS denied environment.</p>
            <img src="Design/flow.jpg" style="width: 45vw" alt="">`;
  }
});


console.log(btn3);
let flag3 = 0;
btn3[0].addEventListener('click', function run() {
  if (flag3 != 0) {
    btn3[0].classList.toggle("active");
    btn3[flag3].classList.toggle("active");
    flag3 = 0;
    let ele = document.getElementById("soft3");
    ele.innerHTML = `<h5 class="card-title">Herding</h5>
          <p class="card-text">IARC has an interesting AI aspect in it's problem statement which is to herd robots past the green line and avoid them crossing the red line. This brings an additional constraint of targetting the robots moving towards red line first and optimizing the attack behavior so that maximum robots can be herded across the line.</p>
          <img src="Design/herd.jpg" style="width: 30vw; transform: rotate(90deg); margin: -50px -20px " alt="">`;
  }
});
btn3[1].addEventListener('click', function run() {
  if (flag3 != 1) {
    btn3[1].classList.toggle("active");
    btn3[flag3].classList.toggle("active");
    flag3 = 1;
    let ele = document.getElementById("soft3");
    ele.innerHTML = `<h5 class="card-title">Simulation on Gazebo</h5>
            <p class="card-text">Aerial Robots are inherently difficult to control and testing on real robots is not always feasible. Hence, a simulation platform on Gazebo which uses the Quad model and physics and also simulates sensor noise and environment is an important step.</p>
            <img src="Design/Quad_simulator.png" style="width: 45vw" alt="">`;
  }
});


console.log(btn4);
let flag4 = 0;
btn4[0].addEventListener('click', function run() {
  if (flag4 != 0) {
    btn4[0].classList.toggle("active");
    btn4[flag4].classList.toggle("active");
    flag4 = 0;
    let ele = document.getElementById("cont");
    ele.innerHTML = `<h5 class="card-title">Two Layered PID</h5>
          <p class="card-text">An aerial robot can control it's position in the form of roll. pitch and yaw but in
            the world frame, It gets an input or feed back in the form of X,Y and Z. So, a cascaded PID with self
            adjusting gains and parameters is the direction towards which we are working. We have got a naive PID
            over RPY and XYZ working on AR Drone and are working to shift to self-adjusting parameters.</p>
          <img src="Design/pid.png" style="width: 55vw" alt="">`;
  }
});
btn4[1].addEventListener('click', function run() {
  if (flag4 != 1) {
    btn4[1].classList.toggle("active");
    btn4[flag4].classList.toggle("active");
    flag4 = 1;
    let ele = document.getElementById("cont");
    ele.innerHTML = `<h5 class="card-title">Low Level Controller</h5>
            <p class="card-text">Low Level Controller includes the embedded system on the robot end where commands from the high level controller and processed and converted into Motor Commands. We have developed a MATLAB Simulink model for our own chassis and working on that to develop on of our controller. Also, we are trying to get Telekyb Near Hover Controller from Max Planck Institute of Biological Cybernetics to run on our own boards which control the motors.</p>
            <img src="Design/low.jpg" style="width: 45vw" alt="">`;
  }
});
btn4[2].addEventListener('click', function run() {
  if (flag4 != 2) {
    btn4[2].classList.toggle("active");
    btn4[flag4].classList.toggle("active");
    flag4 = 2;
    let ele = document.getElementById("cont");
    ele.innerHTML = `<h5 class="card-title">Self Estimation</h5>
            <p class="card-text">A robot should know where is it. Knowing the location of the robot in the world using onboard sensors is a major challenge in robotics. We are using IMU data along with vision information and SONAR sensors to fuse the information and get an estimate of our own position. We are constantly trying to improve this by comparing it with our true value setup and move the state of the art ahead.</p>
            <img src="Design/self.jpg" style="width: 45vw" alt="">`;
  }
});
btn4[3].addEventListener('click', function run() {
  if (flag4 != 3) {
    btn4[3].classList.toggle("active");
    btn4[flag4].classList.toggle("active");
    flag4 = 3;
    let ele = document.getElementById("cont");
    ele.innerHTML = `<h5 class="card-title">Path Planner</h5>
            <p class="card-text">The robots in order to perform some tasks needs to move from one place to another. During it's course of motion, it may deviate and the information from estimator and vision is noisy. Moroever, in order to fulfill the IARC problem statement, we need a time dependent trajectory generated and followed to optimally reach a ground robot and perform any action on it.</p>
            <img src="Design/path.png" style="width: 45vw" alt="">`;
  }
});