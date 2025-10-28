// call by value

function sum(a,b) {
    var res = a + b;
    document.writeln(`<p> sum =  ${res} </p>`)
}

sum(12,35)
sum(45,35)

// arrow function
const product = (x,y) => {
    document.writeln(`<p> product = ${x * y} </p>`)
}

product(12,5)
product(12,9)

// const local function
var rem = function (p,q) {
    document.writeln(`<p> rem = ${p % q} </p>`)
}

rem(35,3)
