  var str1 = "John is an engineer. JOHN is working in Ibm. john stays in  banglore";
    var str2 = "Welcometojavascript";

    console.log(`str1 = `,str1)
    console.log(`str2 = `,str2)

    console.log(`\n`)

// slice(start,end) 
console.log(`slice =`, str1.slice(0,19));
 console.log(`slice =`, str2.slice(2,5));// slice(start,end)

 console.log(`\n`)

// substring(start,end)
console.log(`substring =`, str1.substring(0,19));
console.log(`substring =`, str2.substring(2,5));

console.log(`\n`)

// substr(start,length) deprecated
console.log(`substr =`, str1.substr(0,19));
console.log(`substr =`, str2.substr(2,5)); // substr(start,length)