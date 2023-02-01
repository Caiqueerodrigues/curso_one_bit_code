const user = {
    name: `John Dow`,
    email: `doejohn@email.com`,
    friends: [{
        name: `Mary`,
        address: {
            street: `Some Street`,
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: `+55`,
        ddd: `22`,
        number: `998765432`
    }
}

//aqui acusará erro por conta da propriedade nao existe
// console.log(user.friends[0].phone.ddd)

//aqui nao dará erro mesmo a propriedade nao existindo
console.log(user?.friends[0]?.phone?.ddd)

console.log(user.friends[0].address)