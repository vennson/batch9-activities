// time
function updateClock() {
  var now = new Date()
  var day = now.getDay()
  var month = now.getMonth()
  var date = now.getDate()
  var year = now.getFullYear()
  var hour = now.getHours()
  var min = now.getMinutes()
  var sec = now.getSeconds()
  var pe = 'AM'
  var greeting = 'Good morning, '

  if (hour >= 12) {
    pe = 'PM'
    if (hour > 18) {
      greeting = 'Good evening, '
    } else {
      greeting = 'Good afternoon, '
    }
  } 
  if (hour === 0) {
    hour = 12
  }
  if (hour > 12) {
    hour -= 12
  }

  document.querySelector('#greeting').innerHTML = greeting

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n){}
    return n
  }

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var ids = ['day', 'month', 'date', 'year', 'hour', 'minute', 'second', 'period']
  var values = [days[day], months[month], date.pad(2), year, hour, min.pad(2), sec.pad(2), pe]

  for (let i = 0; i < ids.length; i++) {
    document.querySelector('#'+ids[i]).innerHTML = values[i]
  }
}

var intervalId = window.setInterval(function() {
  updateClock()
}, 1000)

updateClock()
// end time

// name
function submitName(event) {
  // console.log(event.key)
  if (event.key === "Enter") {
    const whole_greeting = document.querySelector('#name-div h1')
    // const greeting = document.querySelector('#greeting')
    const entered_name = document.querySelector('#entered-name')
    whole_greeting.style.opacity = 0
    name.blur()
    
    setTimeout(() => {
      entered_name.innerHTML = name.value
      whole_greeting.style.opacity = 1
    }, 0)

    // let result = await myFunc

    name.style.display = 'none'
    // const focus = document.querySelector('#focus')
    // name.classList.add('focus-enter')
  }
}

const name = document.querySelector('#name')
name.addEventListener('keydown', submitName)

const datetime = document.querySelector('#datetime')
const time_div = document.querySelector('#time-div')
const extra_time = document.querySelector('#extra-time')
const date_div = document.querySelector('#date-div')
time_div.addEventListener('mouseenter', showDate)
time_div.addEventListener('mouseleave', hideDate)
time_div.addEventListener('click', permaDate)

function showDate() {
  // console.log('showdate')
  liftTime()
  extra_time.classList.toggle('hide')
  date_div.classList.toggle('hide')
}

function liftTime() {
  if (window.innerWidth <= 320 ) {
    console.log('<=320')
    time_div.style.marginTop = '41.7vh'
  } else {
    time_div.style.marginTop = '31.7vh'
  }
}

function hideDate() {
  // console.log('hidedate')
  if (!permaActive) {
    time_div.style.marginTop = '43vh'
    extra_time.classList.add('hide')
    date_div.classList.add('hide')
  }
}

var permaActive = false
var counterDate = 0
function permaDate() {
  // console.log('hidedate')
  if (counterDate % 2 === 0) {
    permaActive = true
    liftTime()
    // time_div.style.marginTop = '31.7vh'
    extra_time.style.display = 'inline'
    date_div.style.display = 'inline'
  } else {
    permaActive = false
    time_div.style.marginTop = '43vh'
    extra_time.style.removeProperty('display')
    date_div.style.removeProperty('display')
  }
  counterDate++
}


// end name

// focus
function submitFocus(event) {
  // console.log(event.key)
  if (event.key === "Enter") {
    const label = document.querySelector('#focus-div-label')
    label.style.opacity = 0

    setTimeout(() => {
      label.innerHTML = 'TODAY'
      label.style.opacity = 1
    }, 500)

    // const focus = document.querySelector('#focus')
    focus.classList.add('focus-enter')
    focus.blur()

  }
}

const focus = document.querySelector('#focus')
focus.addEventListener('keydown', submitFocus)
// end focus

// quotes
const quote_list = ['Life is life.', 'Time is gold.', 'Not all heroes wear capes.', 'Work smart & work hard.']
const random = Math.floor(Math.random() * quote_list.length)
document.querySelector('#quote-result').innerHTML = quote_list[random]

const quote = document.querySelector('#quote')
const quote_add = document.querySelector('#quote-add')
quote_add.addEventListener('click', displayAdd)

function displayAdd() {
  console.log('displayAdd')
  const quotes = document.querySelector('#quotes')
  
  quotes.style.display = 'none'
  quote.style.display = 'inline'
  quote.focus()
}

quote.addEventListener('keydown', addQuote)

function addQuote(event) {
  if (event.key === 'Enter') {
    const quote_value = document.querySelector('#quote').value
    quote_list.push(quote_value)
    document.querySelector('#quote-result').innerHTML = quote_value
    quote.style.display = 'none'
    quote.value = ''
    quotes.style.display = 'inline'
  }
}
// end quotes

// todo
const todos = []
const todo = document.querySelector('#todo')

todo.addEventListener('keydown', addTodo)

var counter = 0
var count_string = ''
const things_todo = document.querySelector('#things-todo')
const todo_num = document.querySelector('#todo-num')
const todo_elements = []
var counter_id = 0

function addTodo(event) {
  if (event.key === 'Enter') {
    counter++
    counter_id++
    const todo_value = document.querySelector('#todo').value
    todos.push(todo_value)

    displayCounter()

    document.querySelector('#todo-list').innerHTML += (
      '<div id="'+('d'+ counter_id) +'"><input id="'+ ('b' + counter_id) +'" type="checkbox" class="checkbox">'
      + '<label id="'+ (counter_id) +'" class="todo">' + ' ' + todo_value + '</label><br></div>'
    )

    // new_todo_element = (
    //   '<input type="checkbox" class="checkbox">'
    //   + '<label class="todo">' + ' ' + todo_value + '</label><br>'
    // ) 

    // todo_elements.push(new_todo_element)
    // displayAllTodos(todo_elements)

    todo.value = ''
    // todo.blur()

    let todos_dbclick = document.querySelectorAll('.todo')
    // todos.push(todo)
    todos_dbclick = Array.from(todos_dbclick)
    todos_dbclick.map(todo => {
      return todo.addEventListener('dblclick', deleteSelf)
    })

    let checkboxes = document.querySelectorAll('.checkbox')
    checkboxes = Array.from(checkboxes)
    // console.log(checkboxes)
    checkboxes.map(checkbox => {
      return checkbox.addEventListener('change', toggleCount)
    })
  }
}



const delete_btn = document.querySelector('#delete') 
delete_btn.addEventListener('click', deleteAll)

function deleteAll() {
  document.querySelector('#todo-list').innerHTML = ''
  count_string = 'ADD TO DO'
  things_todo.innerHTML = '<span id="todo-num"></span>'+ count_string
}

const todo_init = document.querySelector('#todo-init')
todo_init.addEventListener('click', openTodo)

function openTodo() {
  const todo_upper = document.querySelector('#todo-upper')
  todo_upper.classList.toggle('visible')
  todo_upper.classList.toggle('invisible')
  todo_init.classList.toggle('clicked')
}

function toggleCount() {
  // console.log('clicked')
  if (this.checked) {
    counter--
    if (counter === 0) {
      count_string = 'ADD TO DO'
      things_todo.innerHTML = '<span id="todo-num"></span>'+ count_string
    } else {
      displayCounter()
      // todo_num.innerHTML = counter + ' '
    }
    console.log('checked')
  }
}

function displayCounter() {
  if (counter === 0) {
    count_string = 'ADD TO DO'
    things_todo.innerHTML = '<span id="todo-num"></span>'+ count_string
    return
  }
  else if (counter === 1) {
    count_string = 'THING TO DO'
  } else {
    count_string = 'THINGS TO DO'
  }
  things_todo.innerHTML = '<span id="todo-num">'+ counter +' </span>'+ count_string
  // todo_num.innerHTML = counter + ' '
}

function deleteSelf(event) {
  // console.log(this)
  // this.style.display = 'none'
  // this.parentNode.removeChild(this)
  // var theID = '#'+ event.target.id
  var theCheckBox = document.querySelector('#d' + event.target.id)
  theCheckBox.parentNode.removeChild(theCheckBox)
  console.log(event.target.id)
  counter--
  displayCounter()
}
// end todo


// change bg
const change_bg = document.querySelector('#change-bg')
const bg = document.querySelector('body')
const bg_list = ['bg3.jpg', 'bg2.jpg','bg4.jpg','bg5.jpg','bg6.jpg','bg7.jpg']
var bg_counter = 0
// var br_string = "url('./assets/bg1.jpg')"
change_bg.addEventListener('click', changeBg)

function changeBg() {
  bg_counter++
  if (bg_counter >= bg_list.length) {
    bg_counter = 0
  }
  // var bg_random = Math.floor(Math.random() * bg_list.length)
  // document.querySelector('#quote-result').innerHTML = quote_list[random]
  bg.style.backgroundImage = "url('./assets/" + bg_list[bg_counter] + "')"

  // switch (bg_random) {
  //   case 0:
  //     break;
  //   case 3:
  //     document.querySelector('#datetime').style.textShadow = '0px 0px 50px red'
  //     break;
  //   case 0:
  //     break;
  
  //   default:
  //     break;
  // }
}
// end change bg
