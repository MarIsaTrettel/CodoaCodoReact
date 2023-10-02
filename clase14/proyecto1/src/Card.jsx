
// eslint-disable-next-line react/prop-types
function Card ({apellido, nacimiento, clubes, mundial, late}){
    return ( 
        <>
        <h2>{apellido}</h2> 
        <small>{nacimiento}</small>
        <p>{clubes}</p>
        <p>Gano un mundial{mundial}</p>
        <p>{late}</p>
        <p>{late? "Late 😍": "Nola 😡"}</p>
        </>
    )
}

export default Card