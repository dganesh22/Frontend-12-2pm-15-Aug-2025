
// array.reduce(function(ac,cu){})

var num = [10,20,30,40,50,60,70,80,90]
console.log(`num = `,num)

var out = num.reduce(function(acu,current){
    console.log(`acu =${acu} and current = ${current}`)
    return acu + current;
}, 0)

console.log(`sum =`, out)