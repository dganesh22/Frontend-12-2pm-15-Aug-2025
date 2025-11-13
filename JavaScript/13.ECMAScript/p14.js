// API Calls
// http methods-> GET, POST, PUT & PATCH, DELETE

async function  readUsers() {
    await fetch(`https://dummyjson.com/users`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
    })
          .then(out => out.json())
          .then(res => {
            console.log(`output =`, res)
          }).catch(err => {
            console.error(err?.message)
          })
}

readUsers()