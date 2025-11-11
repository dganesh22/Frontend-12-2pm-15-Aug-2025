// Object.keys() and Object.values()

let user = {
    name: "tom",
    email: "tom@gmail.com",
    mobile: "9988774455",
    age: 23,
    city: "Manglore"
}

console.log(`user =`, user)

let res1 = Object.keys(user) // array of keys
let res2 = Object.values(user) // array of values

console.log(`keys = `,res1) 
console.log(`values = `,res2)
