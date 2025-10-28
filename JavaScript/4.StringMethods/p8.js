// lexicographical comparision using localCompare()

var a = "Hello";
var b = "World";
var c = "Hello";

console.log(`Hello < World =`, a.localeCompare(b)); // -1

console.log(`World > Hello =`, b.localeCompare(c)); // 1

console.log(`Hello === Hello =`, a.localeCompare(c)); // 0