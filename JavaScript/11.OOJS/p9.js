
// Object.freeze(object) -freeze the entaire object (it will avoid re assignment)

let user = {
    name: "john",
    email: "john@gmail.com",
    age: 22
}

Object.defineProperty(user,"city", {
    value: "bengaluru",
    writable: false
})

console.log(`before user =`,user)
Object.freeze(user)

user.name= "Sam"
user.email= "sam@gmail.com"
user.age= 24
user.city = "Manglore"

console.log(`after user =`, user)