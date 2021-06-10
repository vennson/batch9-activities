class MainStore {
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
    console.log(`\n-----SELLING`)
    this.inventoryList.forEach((book) => {
      if (book.title === title) {
        if (book.quantity === 0) {
          return console.log(`${book.title} out of stock`)
        } else if (book.quantity < quantity) {
          return console.log(`only ${book.quantity} stocks left`)
        } else {
          book.quantity -= quantity
          this.earnings += (book.value * quantity)
          return console.log(`Successful transaction`)
        }
      }
    })

    // console.log(`${title} out of stock \n`)
  }

  totalEarnings() {
    console.log(`\n-----EARNINGS`)
    console.log(`Store name: ${this.name} \nEarnings  : PHP${this.earnings}`)
  }

  listInvetory() {
    console.log(`\n-----INVENTORY`)
    this.inventoryList.forEach((book) => {
      console.log(`Title   : ${book.title} \nQuantity: ${book.quantity} pcs \nValue   : PHP${book.value}`)
      console.log(`-`)
    })
  }
}


class BookStore extends MainStore {
  constructor(name, inventoryList, earnings, parentStore) {
    super()
    this.name = name
    this.inventoryList = inventoryList
    this.earnings = earnings
    this.parentStore = parentStore
    this.foundBook = {}
    this.foundParentBook = {}
    this.findBook = function(title, bookStoreList, mainStoreList) {
      this.foundBook = bookStoreList.find((book) => {
        return book.title === title
      })
      this.foundParentBook = mainStoreList.find(book => {
        return book.title === title
      })
      // console.log(title)
      // console.log(bookStoreList)
      // console.log(mainStoreList)
      // console.log(this.foundBook)
    }
  }

  addBook(title, quantity, value) {
    console.log(`\n-----ADDING BOOK`)
    let newBook = new BookItem(title, quantity, value)
    this.inventoryList.push(newBook)
    this.parentStore.inventoryList.push(newBook)
  }

  sellBook(title, quantity) {
    console.log(`\n-----SELLING`)
    this.inventoryList.forEach((book) => {
      if (book.title === title) {
        if (book.quantity === 0) {
          return console.log(`${book.title} out of stock`)
        } else if (book.quantity < quantity) {
          return console.log(`only ${book.quantity} stocks left`)
        } else {
          this.findBook(title, this.inventoryList, this.parentStore.inventoryList)
          book.quantity -= quantity
          // this.foundParentBook.quantity -= quantity
          this.earnings += (book.value * quantity)
          this.parentStore.earnings += (book.value * quantity)
          return console.log(`Successful transaction`)
        }
      }
    })
  }
}

// function findBook(this, title) {
//   // this.foundBook = this.inventoryList.find(title)
//   // console.log(this.findBook)
//   console.log('test')
// }

class BookItem {
  constructor(title, quantity, value) {
    this.title = title
    this.quantity = quantity
    this.value = value
  }
}


// class Laptops extends Store {
//   constructor(title, quantity, value) {
//     super(name, inventoryList, earnings)
//     this.title = title
//     this.quantity = quantity
//     this.value = value
//   }
// }

const mainStore = new MainStore('Main Store', [], 0)

// add argument for mainStore para alam ni 2 classes ang store instance for total earnings
const bookStore = new BookStore('National Book Store', [], 0, mainStore)



// const laptopStore = new Laptops('Apple Computers', [], 0)

bookStore.addBook('Lord of the Rings', 5, 200)
bookStore.addBook('Game of Thrones', 2, 500)
console.log(bookStore.inventoryList)
console.log(bookStore.parentStore.inventoryList)


// bookStore.restockBook('Lord of the Rings', 5)
// console.log(bookStore.inventoryList)
// console.log(bookStore.parentStore.inventoryList)

bookStore.sellBook('Lord of the Rings', 4)
console.log(bookStore.inventoryList)
console.log(bookStore.parentStore.inventoryList)
// // bookStore.sellBook('Book na wala sa store', 2)
// bookStore.sellBook('Game of Thrones', 1)

bookStore.totalEarnings()
bookStore.listInvetory()
mainStore.totalEarnings()
mainStore.listInvetory()
