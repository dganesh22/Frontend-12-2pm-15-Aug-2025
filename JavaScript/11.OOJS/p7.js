

let user = {}

Object.defineProperty(user, "name",{
    value: "John",
    writable: true
})

/* 
    writable => true = re-assign another value to / re write
                false = disabled the re-assgin
*/

console.log(`user = `, user)

user.name = "Tom"

console.log(`user = `, user)
