// array sort

 let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];

          console.log(`before = `, ageGroup)

// type name = array.sort(function(a,b){ return a - b })

var asc = ageGroup.sort((a,b) => a - b );
console.log(`asc = `, asc)

var dsc = ageGroup.sort((a,b) => b - a );
console.log(`dsc = `, dsc)