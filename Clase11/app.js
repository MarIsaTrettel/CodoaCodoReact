window.addEventListener("load", () =>{
    cargarPeliculas();
})

let pagina = 1;

let btnAnterior = document.querySelector(".btnAnterior");
let btnSiguiente = document.querySelector(".btnSiguiente");

// Funcion boton anterior

 btnAnterior.addEventListener("click", () => {
    if (pagina > 1){
        pagina -= 1;
        // cargar la página
        cargarPeliculas();
    }else{
        pagina = 500;
        cargarPeliculas();
    }
 })

 // Funcion boton siguiente

 btnSiguiente.addEventListener("click", () => {
    if (pagina < 500 ){
        pagina += 1;
        // cargar la página
        cargarPeliculas();
    } else {
        pagina = 1;
        cargarPeliculas();
    }
 })

 // Cargar peliculas

 const cargarPeliculas = async () =>{
    try {
        let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ef0c38873ac480926387f7960b82f6a0&language=es-MX&page=${pagina}`);
        console.log(respuesta);
    } catch (error) {
        
    }
 }
 cargarPeliculas();