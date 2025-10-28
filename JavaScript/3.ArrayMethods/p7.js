
 var ageGroup = [18,20,18,21,23,25,24,23,18,9,11,9]
        console.log(`agegroup = `, ageGroup)

    
//remove the duplicates

var out = ageGroup.reduce(function(ac,cu){
     console.log(`ac = ${ac} and cu=${cu}`)

     if(ac.indexOf(cu) === -1) {
        ac.push(cu)
     }
     return ac;
}, [])

console.log(`output =`, out)