// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'

import Boton from "./Boton.jsx"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='calculadora'>
    <div>
      <Boton numero={1} />
      <Boton numero={2} />
      <Boton numero={3} />
    </div>
    <div>
      <Boton numero={4} />
      <Boton numero={5} />
      <Boton numero={6} />
    </div>
    <div>
      <Boton numero={7} />
      <Boton numero={8} />
      <Boton numero={9} />
    </div>
  </div>

)