const nav = document.querySelector("#nav");
const openNav   = document.querySelector("#btn-open");
const closeNav = document.querySelector("#btn-close");


openNav.addEventListener("click", () => {
    nav.classList.add("visible");
})

closeNav.addEventListener("click", () => {
    nav.classList.remove("visible");
})
