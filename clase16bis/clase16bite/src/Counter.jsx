import { useState } from "react"
import { Boton } from "./Boton"

export const Counter = () => {
    return (
        <h1>COUNTER new</h1>

    )
}

export const Counter2 = () => {

    const [contador, setContador] = useState (0)

    return (
        <>
            <h1>COUNTER 2</h1>
            <Boton numero={1} onClick={() => alert("Presionaste el boton")} />
            <Boton numero={2} />
            <p>CONTADOR: {contador}</p>
        </>


    )
}




