// object array

var users = [
    {
        id: 1,
        name: "sam",
        email: "sam@gmail.com",
        course: "java fullstack"
    },
    {
        id: 2,
        name: "mark",
        email: "mark@gmail.com",
        course: "python fullstack"
    },
    {
        id: 3,
        name: "sara",
        email: "sara@gmail.com",
        course: "mern fullstack"
    }
]

console.log(`users =`, users)

users.forEach((val,index) => {
    document.writeln(`<h3> ${val.id} ${val.name} </h3>`);
    document.writeln(`<p> email = ${val.email} </p>`);
    document.writeln(`<p> course = ${val["course"]} </p>`);
});


// JSON (JavaScript Object Notation) Array - server response

// object array to json array
var users1 = JSON.stringify(users);
console.log(`json =`, users1);

// json array to object array
var users2 = JSON.parse(users1);
console.log(`object=`, users2)