 var user = [
                {
                    id: 1,
                    first: "Raju",
                    last: "kumar",
                    email: "raju@gmail.com"
                },
                {
                    id: 2,
                    first: "John",
                    last: "Michel",
                    email: "john@gmail.com"
                },
                {
                    id: 3,
                    first: "Raju",
                    last: "sharma",
                    email: "raju123@gmail.com"
                },
                {
                    id: 4,
                    first: "Chand",
                    last: "sharma",
                    email: "chandu@gmail.com"
                }
            ];

            console.log(`users =`, user)

/* 
            return single matched object
    array.find(function(item){
    })

    return array of values
    array.filter(function(item){})
*/

var out1 = user.find(function(item){
    return item.id === 2
})
console.log(`find =`, out1)

var out2 = user.filter(function(item){
    return item.first === "Raju"
})
console.log(`filter =`, out2)