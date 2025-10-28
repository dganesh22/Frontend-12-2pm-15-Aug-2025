
// array.reduceRight(function(ac,cu){},initialization)

var arr1 = [
    [0,1,2],
    [3,4,5],
    [6,7,8]
]

console.log(`arr1 =`, arr1)

var res = arr1.reduceRight(function(ac,cu){
    console.log(`ac = ${ac} and cu = ${cu}`)
    return ac.concat(cu)
})

console.log(`output =`, res)
console.log(`array =`, res.length)