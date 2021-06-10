class MainStore {
  constructor(name, inventoryList, earnings) {
    this.name = name
    this.inventoryList = inventoryList
    this.earnings = earnings
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
    super(name, inventoryList, earnings)
    this.parentStore = parentStore
  }

  addBook(title, quantity, value) {
    let newBook = new BookItem(title, quantity, value)
    this.inventoryList.push(newBook)
    this.parentStore.inventoryList.push(newBook)
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
    let foundBook = false
    this.inventoryList.forEach((book) => {
      if (book.title === title) {
        foundBook = true
        if (book.quantity === 0) {
          return console.log(`${book.title} out of stock`)
        } else if (book.quantity < quantity) {
          return console.log(`${book.title} has only ${book.quantity} stocks left`)
        } else {
          book.quantity -= quantity
          this.earnings += (book.value * quantity)
          this.parentStore.earnings += (book.value * quantity)
          return console.log(`Successful transaction`)
        }
      }
    })
    if (!foundBook) {
      console.log(`${title} out of stock`)
    }
  }
}

class BookItem {
  constructor(title, quantity, value) {
    this.title = title
    this.quantity = quantity
    this.value = value
  }
}

const mainStore = new MainStore('Main Store', [], 0)
const bookStore = new BookStore('National Book Store', [], 0, mainStore)

bookStore.addBook('Lord of the Rings', 5, 200)
// bookStore.addBook('Game of Thrones', 2, 500)

bookStore.restockBook('Lord of the Rings', 3)

bookStore.sellBook('Lord of the Rings', 4)
bookStore.sellBook('Lord of the Rings', 20)
bookStore.sellBook('Book na wala sa bookstore', 2)

mainStore.listInvetory()
bookStore.listInvetory()
mainStore.totalEarnings()
bookStore.totalEarnings()