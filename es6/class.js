class Player {
  constructor(name, country) {
    this.name = name
    this.country = country
  }

  print() {
    console.log(`${this.name} was born in ${this.country}`)
  }
}

let james_bond = new Player('James Bond', 'Italy')
let super_man = new Player('Super Man', 'America')

james_bond.print()
super_man.print()


class BasketBallPlayer extends Player {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  printAge() {
    console.log(`${this.name} is ${this.age} years old and knows how to play Basketball`)
  }
}

let kobe_bryant = new BasketBallPlayer('Kobe Bryant', 24)
let stephen_curry = new BasketBallPlayer('Stephen Curry', 30)

kobe_bryant.printAge()
stephen_curry.printAge()
