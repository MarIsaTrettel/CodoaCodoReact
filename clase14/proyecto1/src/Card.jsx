import "./Card.css"


// eslint-disable-next-line react/prop-types
function Card ({apellido, nacimiento, clubes, mundial, late}){
    return ( 
        <>
        <h2 style={{backgroundColor:mundial?"gold":"silver", color:"white"}  }>{apellido}</h2> 
        <small className= {(mundial? "dorado": "plateado")}>{nacimiento}</small>
        <p>{clubes}</p>
        <p>Gano un mundial{mundial}</p>
        <p>{late}</p>
        <p>{late? "Late 😍": "Nola 😡"}</p>
        </>
    )
}

export default Card