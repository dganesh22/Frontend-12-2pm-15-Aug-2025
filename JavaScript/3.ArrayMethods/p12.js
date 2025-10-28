// array.entries

var names = ["mark", "harry", "john"]
console.log(`names = `, names)

        let out =  names.entries();
        console.log(`entries  = `,out)


    for(let item of out) {
        console.log(`item =`, item)
    }