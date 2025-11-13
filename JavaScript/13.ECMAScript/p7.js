/* 
    generator function

    A generator is a function that returns an iterator. generator functions are indicated by an astrick (*)

    properties of generator function create using "yield" keyword
*/

function *display() {
    yield "Sam";
    yield "Mary";
    yield "Tom";
    yield "Mac";
}

let out  = display();

console.log(`first item =`, out.next()) // { value : "Sam", done: false }
console.log(`second item =`, out.next()) // { value : "Mary", done: false }