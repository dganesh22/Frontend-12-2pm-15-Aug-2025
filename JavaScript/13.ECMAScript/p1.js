
/* block bindings */

/* 
    var - global scope
    let
    const - local scope / block scope
*/

  if(true) {
        var x = 120;
        console.log(`block scope x =`, x)
    } 

    console.log(`global scope x =`, x)

console.log(`\n`)

// try - catch block used to handle run time exceptions
try {
    if(true) {
        let y = 343
        console.log(`block scope y =`, y)
    }
console.log(`global scope y =`, y)
} catch (error) {
    console.log(error)
}

console.log(`\n`)