const listName = () => {
    return [  
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Iman', 'Olivia', 'Penelope'
    ]    
}

const searchName = (search, limit, callback) => {
callback.find(element => element === 'an')
console.log(callback)
}

searchName("an", 3, listName())
