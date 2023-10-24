
import ReactDOM from 'react-dom/client'

import Cards from './Cards.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    
    <Cards apellido="Messi" nacimiento="1987" clubes={["Newells", "Barcelona", "PSG", "Inter Miami"]} mundial={true} late={false} />
    <Cards apellido="Messi" nacimiento="1987" clubes={["Newells", "Barcelona", "PSG", "Inter Miami"]} mundial={false} late={true} />
  </div>
)
