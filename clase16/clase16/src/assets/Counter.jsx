function Counter() {
    return(
        <h1>Counter</h1>
    )
}
export default Counter

import { Boton } from "./Boton"

export const Counter2 = () =>{
    return(
        <>
        <Boton Onclick={()=>alert("Hiciste click")}/>
        <Boton numero= {2} />
        <h1>counter2</h1>
        </>
    )
}