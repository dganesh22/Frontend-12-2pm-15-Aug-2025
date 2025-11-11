
class Product {
    constructor(x,y) {
        this.a = x;
        this.b = y;
    }

    static calculate(obj) {
        console.log(`obj =`, obj)
        document.writeln(`<h1> product = ${obj.a * obj.b}  </h1>`)
    }

}

let num = new Product(10,20)

let num1 = 20

Product.calculate(num)

console.log(`class instance =`, num instanceof Product) // true
console.log(`Object instance =`, num instanceof Object) // true

console.log(`instance =`, num1 instanceof Product) // false