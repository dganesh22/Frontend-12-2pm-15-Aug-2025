
// every - all values 
 let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let ageGroup1 = [18,19,20,42,32]

 function check(age) {
    return age >= 18;
 }

 let res1 = ageGroup.every(check); //false
 console.log(`every res1 = `, res1)

 let res2 = ageGroup1.every(check); //true
 console.log(`every res2 = `, res2)

 console.log(`\n`)

  // some - atleast one or none
    let res3 = ageGroup.some(check);
    let res4 = ageGroup1.some(check);

    console.log(`some = `, res3) // true
    console.log(`some = `, res4)// true

 let ageGroup2  = [12,6,4,8,13]
console.log(`some = `, ageGroup2.some(check)) // false