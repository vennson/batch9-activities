// let findUserData = new Promise( (resolve, reject) => {
//   resolve()
//   reject()
// } )

// findUserData.then(
//   (success) => {console.log('success')},
//   (error) => (console.log('error'))
// )

const userData = [
  {
    name: 'James Bond',
    age: 30,
    email: 'jb_007@gmai.com'
  },
  {
    name: 'Wonder Woman',
    age: 20,
    email: 'ww@marvel.com'
  }
]

const findUserData = (user) => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      var error = false

      if (error) {
        reject('ERROR: sorry wala yung user na yan')
      } else {
        resolve('SUCCESS: yes existing user na yan')
      }
    }, 3000)
  })
}

for (let i = 0; i < userData.length; i++) {
  findUserData()

  if (user === userData[i].name) {
    console.log(userData[i])
    break
  } else if (i === (userData.length - 1)) {
    error = true
  }
}

findUserData('James Bon')
.then( (sucess) => console.log(sucess) )
.catch( (error) => console.log(error) )