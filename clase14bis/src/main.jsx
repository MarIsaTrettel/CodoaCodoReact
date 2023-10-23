import React from 'react'
import ReactDOM from 'react-dom/client'
/* import Boton from './Boton.jsx' */
import Cards from './Cards.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Boton /> */}
    <Cards apellido="Messi" nacimiento={1987} clubes={["Newells", "Barcelona", "PSG", "Inter Miami"]} mundial={true} late={false} />
  </React.StrictMode>
)
