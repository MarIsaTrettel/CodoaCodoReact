
export function PeliculasCard({pelicula}) {
    
    const imgUrl = "http://image.tmdb.org/t/p/w300" + pelicula.poster_path

    return(
            <li className="movieCard">
                <img src={imgUrl} alt={pelicula.title} className="movieImage" />
                <div>{pelicula.title}</div>
            </li>
    )
}