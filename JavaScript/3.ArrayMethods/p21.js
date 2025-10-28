// array.flat()

var nums = [0,1,2,[3,4,[5,6,[7,8]]]]

console.log(`nums =`, nums)

console.log(`1 =`, nums.flat(1))
console.log(`2 =`, nums.flat(2))
console.log(`3 =`, nums.flat(3))


console.log(`\n`)

 var nums1 = [0,1,2,3,[4,5,[6,7,[8,9,[10,11,[12,13]]]]]];
 console.log(`nums =`, nums1)

 // to flat all nested array elements as single array
 console.log(`flat =`, nums1.flat(Infinity))