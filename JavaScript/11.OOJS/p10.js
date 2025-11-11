
// Object.entries()

let car = {
    title: "Jeep",
    company: "wrangler",
    year: 2024
}

console.log(`object =`, car)

// convert the object into entries
let out = Object.entries(car)

console.log(`entries (array of key & values) =`, out) // array of key:value

let out1 = Object.fromEntries(out)
console.log(`object = `, out1)