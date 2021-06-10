let myMixin = {
  loggedAddBook(title, quantity, value) {
    console.log(`-----Logged AddBook`)
    if (quantity <= 0) {
      return console.log(`Failed to add ${title}`)
    } 
    this.addBook(title, quantity, value)
    if (this.addedBook !== {} && this.addedBook.quantity > 0) {
      console.log(`Successfully added ${this.addedBook.title}`)
      this.addedBook = {}
    } else {
      console.log(`Failed to add ${title}`)
    }
  },
  loggedRestockBook(title, quantity) {
    console.log(`-----Logged RestockBook`)
    if (quantity <= 0) {
      return console.log(`Failed to restock ${title}`)
    }
    this.restockBook(title, quantity)
    if (this.restockedBook !== {} && this.restockedBook.quantity > 0) {
      console.log(`Successfully restocked ${this.restockedBook.title}`)
      this.restockedBook = {}
    } else {
      console.log(`Failed to restock ${title}`)
    }
  },
  loggedSellBook(title, quantity) {
    console.log(`-----Logged SellBook`)
    if (quantity <= 0) {
      return console.log(`Failed to sell ${title}`)
    }

    this.soldBook = this.inventoryList.find((book) => (
      book.title === title
    ))
    
    if (this.soldBook !== {} && this.soldBook.quantity >= quantity) {
      this.sellBook(title, quantity)
      console.log(`Successfully sold ${this.soldBook.title}`)
      this.soldBook = {}
    } else if(this.soldBook.quantity < quantity) {
      // console.log(`Failed to restock ${title}`)
      console.log(`${this.soldBook.title} has only ${this.soldBook.quantity} stocks left`)
    } else {
      console.log(`Failed to restock ${title}`)
    }
  },
  itemData(title) {
    this.inventoryList.map(book => {
      if (book.title === title) {
        console.log(`-----Item Data`)
        console.log(`Title   : ${book.title}\nQuantity: ${book.quantity} \nValue   : PHP${book.value}`)
      }
    })
  },
}

let mainStoreMixin = {
  totalEarnings() {
    console.log(`-----EARNINGS`)
    console.log(`Store name: ${this.name} \nEarnings  : PHP${this.earnings}`)
  },
  listInvetory() {
    console.log(`-----INVENTORY`)
    this.inventoryList.forEach((book) => {
      console.log(`Title   : ${book.title} \nQuantity: ${book.quantity} pcs \nValue   : PHP${book.value}`)
      console.log(`-`)
    })
  }
}

export { myMixin, mainStoreMixin }