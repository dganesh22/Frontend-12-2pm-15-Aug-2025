// call through events

function sum() {
    let x = 12;
    let y = 24;
    document.writeln(`<h1> sum of 2 numbers = ${x = y} </h1>`);
}

var product = function() {
    let a = 123;
    let b = 4;
    document.writeln(`<h1> product of 2 numbers = ${ a * b} </h1>`)
}

var rem = () => {
    let x = 30;
    let y = 4;
    document.writeln(`<h1> remainder is = ${ x % y } </h1>`)
}