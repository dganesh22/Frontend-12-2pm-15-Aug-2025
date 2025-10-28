const user = ["tom", "mark"]
console.log(`user = `, user)

// array.unshift(value) // first-in
user.unshift("sam");
console.log(`user =`, user)
user.unshift("steve");
console.log(`user =`, user)

// array.shift() first out
user.shift()
console.log(`user =`, user)
user.shift()
console.log(`user =`, user)