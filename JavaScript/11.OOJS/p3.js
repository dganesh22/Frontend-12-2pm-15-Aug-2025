
// Object.getPrototypeOf() and Object.setPrototypeOf()
let car = {
    title: "Innova",
    company: "toyota",
    model: 2024,
    color: "white"
}

let car1 = Object.create(car) // cloned object

console.log(`car = `, car)
console.log(`car1 = `, car1)

// to retrive properties from cloned object - getPrototypeOf()
let car2 = Object.getPrototypeOf(car1)
console.log(`getprototype =`, car2)
console.log(`\n`)

// to update / to change the cloned object properties - setPrototypeOf()
let car3 = Object.setPrototypeOf(car1, {
    title: "Thar",
    company: "mahindra",
    model: 2023,
    color: "red"
})

console.log(`car3 =`,car3)
let car4 = Object.getPrototypeOf(car1)
console.log(`getprototype =`, car4)