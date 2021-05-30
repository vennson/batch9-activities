// const fetch = require('node-fetch')
// fetch("https://jsonplaceholder.typicode.com/comments/1")
// .then((res) => res.json())
// .then((data) => console.log(data))

async function getJoke() {
  const fetch = require('node-fetch')
  await fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((data) => console.log(data.value))
}

getJoke()