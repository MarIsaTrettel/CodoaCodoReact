import React from 'react'
import ReactDOM from 'react-dom/client'
import {Counter, Counter2} from "./Counter.jsx"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
    <Counter2/>
  </React.StrictMode>
)
