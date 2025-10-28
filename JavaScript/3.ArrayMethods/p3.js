// array.splice(index,delete_count,values)

 
var colors = ["red","green","blue"]
console.log(`colors= `, colors)

// add the values into the array without delete
colors.splice(2,0, "gold", "orange")
console.log(`colors = `, colors)

// add the values by removing the existing values
        colors.splice(3,2,"deeppink")
        console.log(`colors =`, colors)


// only delete values with out inserting new values
        colors.splice(2,2)
        console.log(`colors=`, colors)