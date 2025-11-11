// class inheritance

// super class
class Course {
    constructor(x,y) {
        this.title = x;
        this.duration = y;
    }
}

// base class
class Student extends Course {
    constructor(a,b,c) {
        super(b,c)
        this.name = a;
    }

    getCourseInfo() {
        document.writeln(`<h2> ${this.name} have opted course ${this.title} and duration of course is ${this.duration}months. </h2>`)
    }
}

let x = new Student("Sam", "react js", 1.5)
x.getCourseInfo()