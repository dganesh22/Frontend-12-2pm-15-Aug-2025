// __proto__ keyword - inheritance chain

let u1 = {
    name: "john",
    email: "john@gmail.com"
}

let u2 = {
    age: 22,
    city: "bengaluru",
    __proto__: u1
}

let u3 = {
    state: "karnataka",
    __proto__: u2
}

console.log(`u3 =`, u3)