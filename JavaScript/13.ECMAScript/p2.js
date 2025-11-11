
// temporal dead zone

/* 
    var will not throw an error , but cann't access the value
    let and const throws an error
*/

if(true) {
    console.log(`value is`, x)
    const x = "blue";
}

