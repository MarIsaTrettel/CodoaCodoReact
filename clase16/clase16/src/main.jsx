import React from 'react'
import ReactDOM from 'react-dom/client'
import Contador from "./assets/Counter.jsx"
import {Counter2} from "./assets/Counter.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contador/>
    <Counter2 />
  </React.StrictMode>,
)
