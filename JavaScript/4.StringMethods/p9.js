// string sort using localCompare()

var tech= ['html', 'css', 'js', 'reactjs', 'typescript', 'java', 'nodejs', 'mongodb', 'expressjs']

console.log(`tech = `, tech)

var res = tech.sort(function(a,b){
    return a.localeCompare(b); // ascending order (a-z) 
})

console.log(`tech = `, res)

var res1 = tech.sort(function(a,b){
    return b.localeCompare(a); //  descending order (z-a)
})

console.log(`tech1 = `, res1)