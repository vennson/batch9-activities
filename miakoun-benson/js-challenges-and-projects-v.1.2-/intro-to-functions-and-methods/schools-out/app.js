function sendText(firstName, lastName ) {
    if (firstName === undefined) {
        console.log('Hey student, school is cancelled today!')
    } else {
        console.log('Hey ' + firstName + ' ' + lastName + ', school is cancelled today!')
    }
    
}
sendText()


sendText('Jose', 'Rizal')
sendText('Manny', 'Pacquiao')
sendText('Robert', 'Rodriguez')
sendText('Elon', 'Musk')
sendText('Mark', 'Zuckerberg')