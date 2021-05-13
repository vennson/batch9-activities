const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.
var counter = 150
function moveRobot() {
    //add code here
    counter += 100
    robot.style.marginLeft = counter
}
robot.addEventListener('click', moveRobot)
