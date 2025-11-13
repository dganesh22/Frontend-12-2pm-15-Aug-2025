/* 
    Promise Constructor
        States of Promise Constructor
        1. Resolve - then(res => {}) = onfulfilled()
        2. Reject - catch(err => {}) = onrejected()
        3. Pending
        4. Settled
*/

function product(a,b) {
    return new Promise(function(resolve,reject){
        if(typeof a !== "number" || typeof b !== "number") {
            return reject(new Error("inputs muste be numbers"))
        }

        resolve(a * b)
    })
}

let out = product(12,5)

console.log(`out =`, out)

out.then(res => {
    console.log(`output =`, res)
}).catch(err => {
    console.error(err?.message)
})