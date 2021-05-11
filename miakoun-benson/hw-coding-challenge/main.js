// #1
var bookCount = 0

function increment(){
    bookCount +=1
}
increment()


// #2
var books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar']

function replaceBooks(){
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth']
}
replaceBooks()


// objects
const car = {
    brand: 'tesla',
    wheelCount: 4,
    modes: ['sports', 'safe', 'eco'],
    isNew: true,
    drive: function() {
        console.log('broom!');
    },
};


// array
let gardenPlants = [ 
    {
        name: 'roses', 
        origin: 'China'
    },
    {
        name: 'tulips', 
        origin: 'Asia'
    },
]

// conditionals
var username = "ben"
var password = "123"

if (username !== 'ben') {
    console.log('incorrect')
} else if (password !== '123') {
    console.log('incorrect')
} else {
    console.log('log in')
}


// truthy
javascript
 var user = {
     name: "Bruce",
     email: null,
     friends: ["Aflred", "Robin"],
     address: {
         street: "123 wayne manor",
         city: "Gotham"
     },
     id: 0,
     nickname: undefined
 }

