// object inheritance using Object.create()

let u1 = {
    name: "john"
}

let u2 = Object.create(u1, {
    email: {
        value: "john@gmail.com"
    }
})

let u3 = Object.create(u2, {
    age: {
        value: 22
    }
})

console.log(`u3 =`, u3)
