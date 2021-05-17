const element = document.querySelector('#mercury-name')
const elements = document.querySelectorAll('.planet-name')
console.log('1 element')

element.innerHTML = 'try lang binago 1 element'
element.style.backgroundColor = 'red'

for (let index = 0; index < elements.length; index++) {
    console.log('may nahuli')
    elements[index].innerHTML = 'binago marami elements'
    elements[index].style.backgroundColor = 'green'
}

const button = document.querySelector('#mercury-box')
const section = document.querySelector('#sect0')
button.innerHTML += '<button id="btn-new" class="btn">change bg to earth</button>'

newButton = document.querySelector('#btn-new')
newButton.addEventListener('click', function() {
    // section.style.backgroundColor = 'yellow'
    section.style.backgroundImage = "url('./assets/earth.jpg')"
    // section.style.backgroundColor = 'blue'
})



for (let index = 1; index < 59; index++) {
    if (index % 2 === 0) {
        console.log('blue team')
    } else {
        console.log('red team')
    }
}
