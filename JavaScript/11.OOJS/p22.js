
/* static method
    1. declare the method as static by adding "static keyword" 
    2. static methods can't called using instance / object of class
    3. static methods can be called only by class name
    4. this pointer is not accessiable inside the static method
*/

class Car {
    constructor(title,company,type,color) {
        this.title = title;
        this.company = company;
        this.type = type;
        this.color = color;
    }
    // non static method
    getCarName() {
        return  "Car name is " + this.title;
    }
     // static method
    static getCarColor() {
        return "Car color is " + this.color;
    }
}

let x = new Car("Innova", "toyota", "diesel","white");
document.writeln(`<h1> ${x.getCarName()} </h1>`)

// x.getCarColor();
document.writeln(`<h1> ${Car.getCarColor()} </h1>`)