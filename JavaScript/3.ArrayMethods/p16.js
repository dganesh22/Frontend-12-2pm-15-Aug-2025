// array.map(function(item,index){ return item; })

   // return an formatted array 
    var names =  ["john", "mark", "tom", "harry", "sam"]
    console.log(`names = `, names)

    var res = names.map((item,index) => {
        return "Mr/Miss " + item;
    })

    console.log(`output =`, res)