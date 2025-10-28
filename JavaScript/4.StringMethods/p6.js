// string reverse

var str = "welcome"

console.log(`str = `, str)
console.log(`str = `, str.split(""))
console.log(`str = `, str.split("").reverse())
console.log(`str = `, str.split("").reverse().join(""))


function revStr(word) {
             let out = "";
             for(let i=word.length - 1; i >= 0; i--) {
                 out += word[i]
             }
             console.log(`final output =`, out)
         }

         revStr("Welcome")