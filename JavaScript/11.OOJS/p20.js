// class

// group of object (property and methods)

class User {
    // constructor method - default
    constructor(){
        this.name = "john";
        this.age = 22;
        this.view = false;
        this.hobbies = ["riding", "driving"];
        this.acc = {
            type: "savings",
            bank: "sbi",
            acc: "12356"
        }
    }

    // method
    getUserName() {
        document.writeln(`<h3> name is ${this.name} </h3>`)
    }
}

let x = new User();
x.getUserName()
document.writeln(`<h3> age is ${x.age} years </h3>`)