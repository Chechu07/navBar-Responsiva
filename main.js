const navToggle = document.querySelector(".nav-toggle")
const navLista = document.querySelector(".nav-lista")

navToggle.addEventListener("click", () => {
    navLista.classList.toggle("nav-lista_visible")

    if(navLista.classList.contains("nav-lista_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else{
        navToggle.setAttribute("aria-label", "Abrir menú")
    }
})
