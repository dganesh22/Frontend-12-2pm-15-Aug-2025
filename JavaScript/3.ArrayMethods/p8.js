 var people = [
            { name: "John", age: 22},
            { name: "Mike", age: 24},
            { name: "Lara", age: 23},
            { name: "Kane", age: 22},
            { name: "Harry", age: 21},
            { name: "Jovil", age: 18},
            { name: "Anna", age: 24},
            { name: "Winson", age: 20}
        ]

        console.log(`input =`, people)

        // sort the based on age 

        function group(arr,ref) {
            return arr.reduce((ac,cu) => {
                let val = cu[ref]; // cu["age"]

                if(!ac[val]) {
                    ac[val] = []; // creates an empty array 
                }

                ac[val].push(cu)
                return ac;
            }, {})
        }

    let out = group(people,"age")
    console.log(`output =`, out)