/* 
    Array
    1. literal array (single)
        a. literal array (direct)
        b. using Array constructor (assignment)
        c. Array constructor (parameter)
    2. object array
    3. json array
*/

// literal array
var users = ["john", "mark", "shan"];
console.log(`users =`, users);

/* 
    array.forEach(function(value,index){
    
    })
*/

users.forEach(function(val,index){
    document.writeln(`<p> ${index} ${val} </p>`)
});

// Array constructor (assignment)
var colors = new Array();

colors[0] = "red";
colors[1] = "green";
colors[2] = "blue";
colors[3] = "white";

console.log(`colors =`, colors);

colors.forEach(function(val,index){
    document.writeln(`<p> ${index} ${val} </p>`)
})

// Array constructor (parameter)
var sub = new Array("java", "html", "css", "js")
console.log(`subjects =`, sub)

sub.forEach((val,index) => {
    document.writeln(`<p> ${index} ${val} </p>`)
})
