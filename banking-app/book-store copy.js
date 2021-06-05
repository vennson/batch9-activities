// const store = {
//   name: 'SM',
//   inventoryList: [apple, orange],
//   earnings: 2000,
// }

// const book = {
//   title: 'Harry Potter',
//   quantity: 5,
//   value: 200
// }

class Store {
  constructor(name, inventoryList, earnings) {
    this.name = name
    this.inventoryList = inventoryList
    this.earnings = earnings
  }

  addBook(title, quantity, value) {
    let newBook = new Book(title, quantity, value)
    this.inventoryList.push(newBook)
  }

  // addBook(newBook) {
  //   this.inventoryList.push(newBook)
  // }

  restockBook(title, quantity) {
    this.inventoryList.some((book) => {
      if (book.title === title) {
        book.quantity += quantity
      }
    })
  }

  // static sellBook(title, quantity) {
  //   this.inventoryList.some((book) => {
  //     if (book.title === title) {
  //       if (book.quantity === 0) {
  //           return console.log(`${book.title} out of stock`)
  //         }

  //       for (let i = book.quantity; i >= 0; i--) {
          
  //         book.quantity--
  //         this.earnings += book.value
  //       }
  //     }
  //   })
  // }

  sellBook(title, quantity) {
    console.log(`-----SELLING-----`)
    this.inventoryList.map((book) => {
      if (book.title === title) {
        if (book.quantity === 0) {
          return console.log(`${book.title} out of stock \n`)
        } else if (book.quantity < quantity) {
          return console.log(`only ${book.quantity} stocks left \n`)
        } else {
          book.quantity -= quantity
          this.earnings += (book.value * quantity)
          console.log(`Successful transaction \n`)
        }
      }
    })
  }

  totalEarnings() {
    console.log(`-----EARNINGS-----`)
    console.log(`Store name: ${this.name} \nEarnings  : PHP${this.earnings} \n`)
  }

  listInvetory() {
    console.log(`-----INVENTORY-----`)
    this.inventoryList.forEach((book) => {
      console.log(`Title   : ${book.title} \nQuantity: ${book.quantity} pcs \nValue   : PHP${book.value} \n`)
    })
  }
}

class Book {
  constructor(title, quantity, value) {
    this.title = title
    this.quantity = quantity
    this.value = value
  }
}

const nbs = new Store('National Book Store', [], 2000)
// const book1 = new Book('Harry Potter', 5, 200)
// const book2 = new Book('Game of Thrones', 2, 500)

nbs.addBook('Harry Potter', 5, 200)
nbs.addBook('Game of Thrones', 2, 500)

nbs.restockBook('Harry Potter', 5)
nbs.sellBook('Harry Potter', 5)

nbs.totalEarnings()
nbs.listInvetory()