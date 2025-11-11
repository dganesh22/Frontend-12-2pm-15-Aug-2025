// custom constructor 
/* 
    constructor = function + object
    member of constructor - properties
    name of the constructor first letter uppercase (not mandatory)
    constructor properties are create using "this" keyword
    constructor can't return     
    to access properties of constructor by creating instance of the constructor using new keyword

    function Constructor() {
    this.property = value;
}

type obj = new Constructor()
let y = new Constructor()

    y.property
*/

function User() {
    this.x = 20;
    this.y = 24;
    this.str = "welcome to string";
    this.isUser = true;
    this.a = null;
    this.b = undefined;
    this.x = 245;
}

//instance using new keyword
let ins = new User();

console.log(`instance of user =`, ins)

document.writeln(`<h3> x = ${ins.x} and y = ${ins.y} </h3>`)