/* 
        charAt(position)
        charCodeAt(position)
        indexOf(char)
        lastIndexOf(char)
*/

var str = "Welcome to JavaScript Class.";
console.log(`string =`,str)

console.log(`charAt() =`, str.charAt(0)) // W
console.log(`charCodeAt() =`, str.charCodeAt(0)) // ASCII

   console.log(`indexOf(e)=`, str.indexOf("e")) // 1
console.log(`lastIndexof(e)=`, str.lastIndexOf("e")) // 6

   console.log(`indexOf(a)=`, str.indexOf("a")) // 12
  console.log(`lastIndexof(a)=`, str.lastIndexOf("a")) // 24

            console.log(`\n`)

 var str1 = "John is an engineer. JOHN is working in Ibm. john stays in  banglore";

 // str.replace(target,value)
   console.log(`str1 =`, str1)
    console.log(`replace =`, str1.replace("john","Tom"))
     console.log(`replace =`, str1.replace(/john/,"Tom")); /*  /regular expression/ */
    console.log(`replace =`, str1.replace(/john/gi,"Tom")); /*  /regular expression/ */