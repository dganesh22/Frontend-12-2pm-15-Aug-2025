// Accessor properties - get/set

let user = {
    firstName: "john",
    lastName: "harry"
}

Object.defineProperty(user,"fullname", {
    get: function(){
        return this.firstName + " " + this.lastName
    },
    set: function(val){
        [this.firstName,this.lastName] = val.split(" ") // john harry
    }
})

console.log(`fullname =`, user.fullname) // john harry
user.lastName = "david"

console.log(`fullname =`, user.fullname) // john david
user.firstName = "tom"

console.log(`fullname =`, user.fullname) // tom david