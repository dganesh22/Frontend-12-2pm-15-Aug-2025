// prototype keyword
// used to create properties of constructor from outside

function User() {
    
}

// Constructor.prototype.property = value;
User.prototype.fullName = "David harry"
User.prototype.age  = 22;
User.prototype.getName = function(){
    document.writeln(`<h3> name is ${this.fullName} </h3>`)
}

let x = new User()
console.log(`x = `, x)

x.getName();