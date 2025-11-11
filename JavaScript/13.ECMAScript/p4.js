// rest operator ... (parameters to array)

function print(...x) {
    console.log(`x = `,x)
}

print(10,20,30,40,50,60,70,80,90)

console.log(`\n`)

// spread operator ... (destructure array into parameter)

let nums = [10,20,34,55,66,77,115,89,99]

console.log(`min =`, Math.min(...nums))
console.log(`min =`, Math.min(10,20,34,55,66,77,115,89,99))