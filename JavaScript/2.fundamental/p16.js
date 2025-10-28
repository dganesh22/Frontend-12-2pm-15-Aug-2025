
var rem = document.getElementById("rem")
var out = document.getElementById("output")

// using addEventListener(event,listener)
rem.addEventListener("click", function() {
    var x = 124;
    var y = 21
    out.innerHTML = `<p> rem = ${ x % y } </p>`
})