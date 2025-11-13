// function hoisting

product(10,20)

// function product(a,b) {
//     document.writeln(`<h1>product = ${a * b} </h1>`)
// }

// arrow function throws an error for function hoisting
const product = (a,b) => {
    document.writeln(`<h1>product = ${a * b} </h1>`)
}

