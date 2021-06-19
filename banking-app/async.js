// Write a function called inOrder that accepts two callbacks and invokes them in order. 
// Implement inOrder using the callback pattern.





// function inOrder(param1, param2) {
//   return new Promise((resolve, reject) => {param1})
//   // param1()
//   // param2()
// }

// function inOrder(param1, param2) {
//   console.log('test')
// }

// function inOrder() {
//   var logOne = setTimeout(function() {
//     console.log("one!")

//     var logTwo = setTimeout(function() {
//       console.log("two!");
//     }, Math.random() * 1000);
//   }, Math.random() * 1000)
// }

// inOrder()


// function inOrder(param1, param2) {
//   var logOne = setTimeout(function() {
//     param1()

//     var logTwo = setTimeout(function() {
//       param2()
//     }, Math.random() * 1000);
//   }, Math.random() * 1000)
// }



// logOne()

// one
// two
// it should always log those two in order regardless of their timing
// * Refactor inOrder to use promises.

// var logOne = setTimeout(function() {
//   console.log("one!");
// }, Math.random() * 1000);

// var logTwo = setTimeout(function() {
//   console.log("two!");
// }, Math.random() * 1000);




// console.log(typeof inOrder)

async function inOrder(param1, param2) {
  await param1()
  await param2()
  
  // param2
}



function logOne() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(console.log("one!"))
    }, Math.random() * 1000)
  });
}

function logTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(console.log("two!"))
    }, Math.random() * 1000)
  })
}


inOrder(logOne, logTwo)
// async