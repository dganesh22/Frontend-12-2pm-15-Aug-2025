// string.match(exp)

var msg = "JavaScript is frontend programming script";
var exp = /programming/; // regular expression

var res1 = msg.match(exp);
console.log(`res1 = `, res1)


// string.matchAll(exp)
var msg1 = "javascript is a frontend Script and also can be used as Backend script, as well as hybrid SCRIPT.";
var exp1 = /script/gi;

var res2 = msg1.matchAll(exp1)

console.log(`res2 = `, res2)

for(let item of res2) {
    console.log(`item =`, item)
}