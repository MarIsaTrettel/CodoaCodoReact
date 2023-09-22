let pagina = 1;

let btnAnterior = document.querySelector(".btnAnterior");
let btnSiguiente = document.querySelector(".btnSiguiente");

// Funcion boton anterior

 btnAnterior.addEventListener("click", () => {
    if (pagina > 1){
        pagina -= 1;
        // cargar la página
    }else{
        pagina = 500;
    }
 })

 // Funcion boton siguiente

 btnSiguiente.addEventListener("click", () => {
    if (pagina < 500 ){
        pagina += 1;
        // cargar la página
    } else {
        pagina = 1;
    }
 })

 // Cargar peliculas

 const cargarPeliculas = async () =>{
    try {
        
    } catch (error) {
        
    }
 }