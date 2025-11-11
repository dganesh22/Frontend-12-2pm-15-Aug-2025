
// object methods
let user = {
    name: "john",
    email: "john@gmail.com",
    age: 22,
    isUser: true
}

// object constructor
console.log(`user = `, user)

// Object.create(object) -> it will copy/clone the object prototype

let newObj = Object.create(user)

console.log(`new object = `, newObj)