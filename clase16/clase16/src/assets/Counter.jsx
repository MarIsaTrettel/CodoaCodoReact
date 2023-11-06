import { useEffect, useState } from "react";
export const Counter3 =() =>{

    const [contador, setContador]= useState(0);

    useEffect(() =>{
        console.log("cambio el contador")
    }, [contador])
    
    return(
        <>
            <p>Contador:{contador}</p>
            <button onClick={()=>setContador(contador+1)}>+</button>
            <button onClick={()=>setContador(contador-1)}>-</button>
        </>
    );
};

/* 
function Counter() {
    return(
        <h1>Counter</h1>
    )
}
export default Counter */
/* 
import { Boton } from "./Boton"

export const Counter2 = () =>{
    return(
        <>
        <Boton Onclick={()=>alert("Hiciste click")}/>
        <Boton numero= {2} />
        <h1>counter2</h1>
        </>
    )
} */