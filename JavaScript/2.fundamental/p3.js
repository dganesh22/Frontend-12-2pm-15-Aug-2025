/* conditional statements

    1. if 
    2. if and else  - ternaray 
    3. if , else if and else
    4. switch case
*/

// var x = 12;
var x = 5;

if(x > 10) {
    document.writeln(`<h1> ${x} value is greater than 10 </h1>`)
} else {
    document.writeln(`<h1> ${x} value is less than 10 </h1>`)
}

// if else if and else

var stu = 55.6;

if (stu > 80 && stu <= 100) {
     document.writeln(`<h1> marks =${stu} and Result = Distinction </h1>`)
} else if (stu > 65 && stu < 80) {
     document.writeln(`<h1> marks =${stu} and Result = First </h1>`)
} else if ( stu > 35 && stu < 65) {
     document.writeln(`<h1> marks =${stu} and Result = Second </h1>`)
} else if (stu < 35) {
     document.writeln(`<h1> marks =${stu} and Result = Fail </h1>`)
} else {
     document.writeln(`<h1> marks =${stu} and Result = null </h1>`)
}

//switch case 
var day = 7;

switch (day) {
    case 1:
        document.writeln(`<h1> Monday </h1>`)
        break;
    case 2:
        document.writeln(`<h1> Tuesday </h1>`)
        break;
    case 3:
        document.writeln(`<h1> Wednesday </h1>`)
        break;
    case 4:
        document.writeln(`<h1> Thursday </h1>`)
        break;
    case 5:
        document.writeln(`<h1> Friday </h1>`)
        break;
    case 6:
        document.writeln(`<h1> Saturday </h1>`)
        break;
    case 7:
        document.writeln(`<h1> Sunday </h1>`)
        break;

    default:
        document.writeln(`<h1> Invalid input </h1>`)
        break;
}