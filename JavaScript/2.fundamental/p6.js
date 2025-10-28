
// nested conditions
var x = 175;

if (x % 2 === 0) {
    if( x > 150) {
        document.writeln(`<h3> ${x} is even and greater than 150 </h3>`)
    } else {
         document.writeln(`<h3> ${x} is even and less than 150 </h3>`)
    }
} else if(x % 2 !== 0) {
    if( x > 150) {
         document.writeln(`<h3> ${x} is odd and greater than 150 </h3>`)
    } else {
         document.writeln(`<h3> ${x} is odd and less than 150 </h3>`)
    }
} else {
     document.writeln(`<h3> ${x} input is invalid </h3>`)
}