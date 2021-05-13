const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]

var string = "Mr. "
for (let i = 0; i < nightClubRegister.length; i++) {
    if (nightClubRegister[i].age < 18) {
        if (nightClubRegister[i].gender === 'female') {
            string = 'Ms. '
        } 

        console.log(string + nightClubRegister[i].name + ' ' 
                    + nightClubRegister[i].lastname 
                    + " you're not allowed inside!")
    }
}   

