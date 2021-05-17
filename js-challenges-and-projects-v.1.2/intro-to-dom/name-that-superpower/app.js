var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

const leagueList = document.querySelector('#league')

for (let i = 0; i < justiceLeague.length; i++) {
    leagueList.innerHTML += ('<li>' + justiceLeague[i].name + ': ' + justiceLeague[i].superpower + '</li>')
}

leagueList.addEventListener('click', () => {
    console.log('mouse clicked!')
})
leagueList.addEventListener('mouseenter', () => {
    console.log('mouse entered!')
})
leagueList.addEventListener('mouseleave', () => {
    console.log('mouse left!')
})