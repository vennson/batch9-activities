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

  if (hour >= 12) {
    pe = 'PM'
  } 
  if (hour === 0) {
    hour = 12
  }
  if (hour > 12) {
    hour -= 12
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n){}
    return n
  }

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var ids = ['day', 'month', 'date', 'year', 'hour', 'minute', 'second', 'period']
  var values = [days[day], months[month], date.pad(2), year, hour, min.pad(2), sec.pad(2), pe]

  const date_div = document.querySelector('#date-div')

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
function submitName() {
  document.querySelector('#name-result').innerHTML = document.querySelector('#name').value
}
// end name

// focus
function submitFocus() {
  document.querySelector('#focus-result').innerHTML = document.querySelector('#focus').value
}
// end focus

// quotes
const quotes = ['life is life', 'time is gold', 'not all heroes wear capes', 'ask the right questions']
const random = Math.floor(Math.random() * quotes.length)
document.querySelector('#quote-result').innerHTML = quotes[random]

function addQuote() {
  const quote = document.querySelector('#quote').value
  quotes.push(quote)
  document.querySelector('#quote-result').innerHTML = quote
}
// end quotes

// todo
const todos = []

function addTodo() {
  const todo = document.querySelector('#todo').value
  todos.push(todo)
  document.querySelector('#todo-list').innerHTML += ('<li class="todo"><p>' + todo + '</p></li>')
}
// end todo
