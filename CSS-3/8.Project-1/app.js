let menu = document.querySelector(".menu")
let close = document.querySelector(".close")

close.addEventListener("click", function(event){
    menu.classList.toggle("active");
});


// switch the designation
let desgn = ["Front End Developer", "Java Developer", "Java FullStack Developer"]

let dg = document.getElementById("desg")

setInterval(function(){
    let index = Math.floor(Math.random() * 3)
    dg.innerText = desgn[index];
}, 2000)