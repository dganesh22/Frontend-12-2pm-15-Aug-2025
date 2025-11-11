// Object.defineProperties(object,{ key: value })

let user = {}

Object.defineProperties(user,{
    name: {
        value: "Mike"
    },
    email: {
        value: "mike@gmail.com"
    },
    city: {
        value: "Manglore"
    },
    getName: {
        value: function() {
            return `<h1> name is ${this.name} </h1>`
        }
    },
    getEmail: {
        value: () => {
            // inside the arrow function this pointer return undefined
            document.writeln(`<h1> email id is = ${this.email} </h1>`)
        }
    }
})

console.log(`user =`, user)