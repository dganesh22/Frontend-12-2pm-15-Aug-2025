// find the largest number

var x= 124;
var y = 235;


// find the sign of product of 3 numbers (use only if and else)
var a = 12;
var b = -4;
var c = -10;


// sort in decending order (conditional statement)
if(a > b && a > c) {
    if( b > c) {
        document.writeln(`<p> ${a}, ${b}, ${c} </p>`)
    } else {
         document.writeln(`<p> ${a}, ${c}, ${b} </p>`)
    }
} else if ( b > a && b > c) {
    if( a > c) {
         document.writeln(`<p> ${b}, ${a}, ${c} </p>`)
    } else {
         document.writeln(`<p> ${b}, ${c}, ${a} </p>`)
    }
} else if ( c > a && c > b) {
    if( a > b) {
         document.writeln(`<p> ${c}, ${a}, ${b} </p>`)
    } else {
         document.writeln(`<p> ${c}, ${b}, ${a} </p>`)
    }
} else {
     document.writeln(`<p> invalid input  </p>`)
}