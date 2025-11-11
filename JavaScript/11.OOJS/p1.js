/* 
object - group of properties

prototype of object
let object = {
    key: value
}
*/

let user = {
    name: "mary",
    age: 22,
    isUser: true,
    hobbies: ["riding", "driving", "cycling"],
    bank: {
        acc: 1234,
        type: "Savings"
    },
    getUser: function() {
        document.writeln(`<h1> welcome to ${this.name} </h1>`)
    },
    getAge: () => {
        // this pointer is global inside of arrow function
        document.writeln(`<h1> age is ${this.age} </h1>`)
    }
}

document.writeln(`<h1> name is =${ user.name } </h1>`) // object.key
document.writeln(`<h1> age is =${ user["age"] } years </h1>`) // object["key"]


user.getUser()
user.getAge()