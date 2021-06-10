import { myMixin, mainStoreMixin } from './utils.js'

class MainStore {
  constructor(name, inventoryList, earnings) {
    this.name = name
    this.inventoryList = inventoryList
    this.earnings = earnings
  }
}

class BookStore extends MainStore {
  constructor(name, inventoryList, earnings, parentStore) {
    super(name, inventoryList, earnings)
    this.parentStore = parentStore
    this.addedBook = {}
    this.soldBook = {}
    this.restockedBook = {}
  }

  addBook(title, quantity, value) {
    let newBook = new BookItem(title, quantity, value)
    this.inventoryList.push(newBook)
    this.parentStore.inventoryList.push(newBook)
    this.addedBook = newBook
  }

  restockBook(title, quantity) {
    this.inventoryList.some((book) => {
      if (book.title === title) {
        book.quantity += quantity
        this.restockedBook = book
      }
    })
  }

  sellBook(title, quantity) {
    this.inventoryList.forEach((book) => {
      if (book.title === title) {
        this.soldBook = book
        if (book.quantity === 0) {
          return
        } else if (book.quantity < quantity) {
          return
        } else {
          book.quantity -= quantity
          this.earnings += (book.value * quantity)
          this.parentStore.earnings += (book.value * quantity)
        }
      }
    })
  }
}

class BookItem {
  constructor(title, quantity, value) {
    this.title = title
    this.quantity = quantity
    this.value = value
  }
}

Object.assign(MainStore.prototype, mainStoreMixin)
Object.assign(BookStore.prototype, myMixin)

const mainStore = new MainStore('Main Store', [], 0)
const bookStore = new BookStore('National Book Store', [], 0, mainStore)

// bookStore.addBook('Lord of the Rings', 0, 200)
// bookStore.addBook('Game of Thrones', 2, 500)
bookStore.loggedAddBook('Lord of the Rings', 5, 200)
// bookStore.loggedAddBook('Game of Thrones', 2, 500)

// bookStore.restockBook('Lord of the Rings', 3)
// bookStore.loggedRestockBook('Lord of the Rings', 0)

// bookStore.sellBook('Lord of the Rings', 4)
// bookStore.sellBook('Lord of the Rings', 20)
// bookStore.sellBook('Book na wala sa bookstore', 2)
// bookStore.sellBook('Lord of the Rings', 4)
// bookStore.sellBook('Lord of the Rings', 20)
// bookStore.sellBook('Book na wala sa bookstore', 2)

bookStore.loggedSellBook('Lord of the Rings', 0)
// bookStore.loggedSellBook('Book na wala sa bookstore', 2)

// mainStore.listInvetory()
// bookStore.listInvetory()
// mainStore.totalEarnings()
// bookStore.totalEarnings()

bookStore.itemData('Lord of the Rings')