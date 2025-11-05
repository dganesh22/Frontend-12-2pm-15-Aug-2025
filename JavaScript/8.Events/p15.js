
let cMenu = document.querySelector(".context-menu")
let btn = document.querySelector(".clsBtn")
let pBody = document.querySelector("body")

pBody.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // avoid page refresh
    console.log(`x = ${event.clientX} and y=${event.clientY}`)

    cMenu.style.left = `${event.clientX}px`;
    cMenu.style.top = `${event.clientY}px`;

    cMenu.classList.add("active");
})

btn.addEventListener("click", () => {
    cMenu.classList.remove("active")
})