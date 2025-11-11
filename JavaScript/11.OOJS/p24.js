
class Course {
    // constructor
    constructor(title) {
        this.title = title;
        console.log('constructor called')
    }

    // non static method
    getTitle() {
        document.writeln(`<h1> title = ${this.title} </h1>`)
    }

    // static method
    static details(a,b) {
        document.writeln(`<h1> title = = ${a} and duration = ${b} </h1>`)
    }
}

// static method call
Course.details("React","1 month")

let x = new Course()