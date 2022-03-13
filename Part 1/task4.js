let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    adress:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

//a. spread operator
let result = {...data, name: "Teguh", email: "moch.teguhhernawankurnia@gmail.com", hobby: "Hiking"}

console.log(result)

//b. destructing
let {street, city}=data.adress

console.log(street)
console.log(city)