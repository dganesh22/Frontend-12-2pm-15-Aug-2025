
var sBtn = document.getElementById("sumBtn");
var out = document.getElementById("output")

sBtn.onclick = function() {
    var x = 12;
    var y = 24;
    out.innerHTML = `<p> Result = ${ x + y } </p>`;
}