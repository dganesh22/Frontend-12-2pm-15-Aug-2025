// class expression

/* 
    class Name {
        constructor(param) {
            this.property = value;
        }

        method(param) {

        }
    }
*/

const User = class {
    constructor(x, y) {
        this.name = x;
        this.email = y;
    }

    getUserInfo() {
        document.writeln(`<h1> username is ${this.name} and email ${this.email} </h1>`);
    }
}

// object
let u1 = new User("Sam", "sam@gmail.com")

u1.getUserInfo()