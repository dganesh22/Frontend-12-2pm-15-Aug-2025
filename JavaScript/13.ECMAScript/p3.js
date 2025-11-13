
// defualt parameters in functions

function product(a,b=3) {
    document.writeln(`<h2> product = ${ a * b } </h2>`)
}

product(10)
product(10,4)