// Comportamiento barra de navegación
const nav = document.querySelector("#nav");
const openNav   = document.querySelector("#btn-open");
const closeNav = document.querySelector("#btn-close");

openNav.addEventListener("click", () => {
    nav.classList.add("visible");
})

closeNav.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// Comportamiento botón "Regresar al inicio"
const btnBackToTop = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnBackToTop.classList.add("show");
    } else {
        btnBackToTop.classList.remove("show");
    }
});

btnBackToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});




