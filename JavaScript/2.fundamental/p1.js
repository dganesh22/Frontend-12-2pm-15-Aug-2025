// variables and datatypes

/* 
    1. Number 
        int,float, double
    2. String
        string,char
    3. Boolean
        true,false
    4. null   
    5. undefined

    6. array
    7. Object
    8. constructor
    9. class
    10. entries
    11. map & weakmap
    12. set & weakset
*/

// variables 
// datatype name = value;
var x = 13;
var y = 12.56;
var z = 1234545.46545454;
var p = -1232;
var q = 2e12;

document.writeln("<h1> variable x =" + x + "</h1>");
document.writeln('<h1> variable y =' + y + '</h1>');

document.writeln(`<h1> var z = ${z} </h1>`);

console.log('variable x =', x);


// string char
var str1 = "Welcome to string";
var str2 = 'Z';

document.writeln(`<h1> string = ${str1} </h1>`);
console.log(`string = `, str1);

// boolean
var b1 = true;
var b2 = false;
document.writeln(`<h2> boolean = ${ b1 } </h2>`);
document.writeln(`<h2> boolean = ${ b2 } </h2>`);
console.log(`boolean  =`, b1);

// null 
var c1 = null;
var c2 = undefined;

console.log(`c1 =`, c1);
console.log(`c1 = `, typeof c1); // object

console.log(`c2 =`, c2);
console.log(`c2 =`, typeof c2); // undefined

console.log(`\n`)
// type of all variables
console.log(`x =`, typeof x);
console.log(`y =`, typeof y);
console.log(`z =`, typeof z);
console.log(`b1 =`, typeof b1);
console.log(`b2 =`, typeof b2);
console.log(`c1 =`, typeof c1);
console.log(`c2 =`, typeof c2);
console.log(`\n`)

// array
var colors = ["red", "blue", "green", "white"];
var nums = [1,2,4,4,5,5,6];
document.writeln(`<h4> colors = ${colors} </h4>`);
console.log(`colors = `, colors)
console.log(`colors = `, typeof colors)

var data = ["mark", true, false, 11232];
console.log(`data = `, data);
console.log(`data = `, typeof data);

console.log(`\n`)

// object - group of properties (key:value)
var user = {
    name: "john",
    email: "john@gmail.com",
    age: 22,
    isAdmin: true
};
console.log(`user = `, user)
console.log(`user = `,typeof user)
document.writeln(`<hr>`)
document.writeln(`<h4> object = ${user} </h4>`)
document.writeln(`<h4> name = ${user.name} </h4>`)

