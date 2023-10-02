/* import React from 'react' */
import ReactDOM from 'react-dom/client'
import Boton from './Boton.jsx'
import Card from './Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<>
<Boton numero="1"/>
<Boton numero="2"/>
<Boton numero="3"/>
<Card apellido= "Messi" nacimiento ={1987} clubes= {["Newells", "Barcelona", "PSG", "inter"]} mundial = {true} late={false}/>
<Card apellido= "Messi" nacimiento ={1987} clubes= {["Newells", "Barcelona", "PSG", "inter"]} mundial = {false} late={true}/>
</>
)
