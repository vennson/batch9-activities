// const player = {
//   name: 'James Bond',
//   codename: 007,
//   age: 32, 
//   address: {
//     city: 'London'
//   }
// }

// const { name, codename, age, address, address:{city} } = player
// console.log (name)
// console.log (codename)
// console.log (age)
// console.log (address)
// console.log (city)

// console.log



// function addressMaker({ city, street }) {
//   const newAddress = {
//     city,
//     street,
//     country: 'Philippines'
//   }

//   const {country} = newAddress

//   console.log(city)
//   console.log(street)
//   console.log(country)

//   console.log(`${city} ${street} ${country}`)
// }

// addressMaker({city: 'Quezon', street: 'Ortigas Avenue'})



// const students = [
//   { name: 'Manny', city: 'Manila' },
//   { name: 'Jose', city: 'Intramuros' },
//   { name: 'Ana', city: 'Mandaluyong' }
// ]

// for (const student of students) {
//   console.log(student.name + ' lives in ' + student.city)
// }

function toBuy(food = 'something') {
  console.log("I'm going to buy " + food + " from the sari-sari store.")
}

toBuy()
toBuy('chicharon')