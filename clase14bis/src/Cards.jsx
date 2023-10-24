import './Cards.css'
// eslint-disable-next-line react/prop-types
function Cards({apellido,nacimiento,clubes,mundial,late}) {

return (
    <>
    <h2 className={mundial? "dorado" : "plateado"}>{apellido}</h2>
    <h2>{nacimiento}</h2>
    <p>{clubes}</p>
    <p>Gano un mundial? {mundial ? "Sí, ganó": "No ganó"}</p>
    <p style={{backgroundColor: mundial? "gold" : "silver"}}>La tengo? {late ? "Si tengo esa figurita" : "No, no tengo esa figurita"}</p>
    </>
)
}

export default Cards