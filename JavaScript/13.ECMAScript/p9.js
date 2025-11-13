
// singleton class expression // anonymous class

const sum = new class {
    constructor(a,b) {
        this.x = a;
        this.y = b;
    }

    calculate() {
        document.writeln(`<h1> sum = ${this.x + this.y} </h1>`)
    }
}(10,20)

sum.calculate()