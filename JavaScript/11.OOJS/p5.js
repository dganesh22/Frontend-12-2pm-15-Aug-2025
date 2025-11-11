// Object.defineProperty(obj,key,value)
// is used to add a single key:value pair from externally

let user = {}

console.log(`user =`, user)

Object.defineProperty(user,"name", {
    value: "Mary"
})
Object.defineProperty(user,"email", {
    value: "mary@gmail.com"
})
Object.defineProperty(user,"age", {
    value: 24
})

console.log(`user = `, user)