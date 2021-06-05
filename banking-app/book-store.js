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

  restockBook(title, quantity) {
    this.inventoryList.some((book) => {
      if (book.title === title) {
        book.quantity += quantity
      }
    })
  }

  sellBook(title, quantity) {
    console.log(`-----SELLING-----`)
    this.inventoryList.forEach((book) => {
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

const nbs = new Store('National Book Store', [], 0)

// nbs.addBook('Harry Potter', 5, 200)
nbs.addBook('Game of Thrones', 0, 500)

// nbs.restockBook('Harry Potter', 5)
// nbs.sellBook('Harry Potter', 5)
nbs.sellBook('Game of Thrones', 2)
// nbs.sellBook('Game of Thrones', 1)

nbs.totalEarnings()
nbs.listInvetory()
