
// object - group of properties (key value pairs)

var user = {
    //key: value
    name: "john",
    age: 22,
    isUser: true,
    address: {
        city: "bengaluru",
        pincode: "560010"
    }
}

console.log(`user =`, user)

document.writeln(`<h4> name = ${user.name} </h4>`);
document.writeln(`<h4> age = ${user.age} </h4>`); // object.key
document.writeln(`<h4> isUser = ${user["isUser"]} </h4>`); // object["key"]

document.writeln(`<h3> city = ${user.address.city} </h3>`);