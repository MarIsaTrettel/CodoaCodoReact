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
        let respuesta = await fetch(``);
        console.log(respuesta);
        if (respuesta.status == 200){ 
            let datos = await respuesta.json()
            console.log(datos.results);
            let peliculas = "";

            datos.results.forEach((pelicula) => {
                peliculas += `<div class="pelicula">
                <img class= "poster" src= "https://image.tmdb.org/t/p/w300${pelicula.poster_path}"/>
                <h3 class= "titulo">${pelicula.title}</h3>
                </div>
                `;
        
                document.querySelector(".contenedor").innerHTML = peliculas;
                
              });
            }else if (respuesta.status===404){
                console.log("error 404 nos vemos en otro lugar");
            }
          } catch (error) {
            console.log(error);
          }
        };