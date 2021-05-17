const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

var buyList = ['buko pie', 'mango', 'bacon' ]
var fridge = ['milk', 'candy', 'choco', 'grapes', 'orange', 'chicharon']

//Challenge: Please fill the fridge array with 5 items of your choice. .


//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.


//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    //your code
    if (fridge.length > 0) {
        buyList.push(fridge.pop())
        refresh()
    }
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
    if (buyList.length > 0) {
        fridge.push(buyList.pop())
        refresh()
    }
}

downButton.addEventListener('click', moveDown)

function refresh() {
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
}

refresh()
