
import "./app.css"
import { LandinPage } from "./pages/LandingPage";
import {BrowserRouter, Routes, Route} from "react-router-dom"


export const App = () => {

    return (
        <BrowserRouter>
        
            <header className="title">THE COCKTAIL DB</header>
            
            <Routes>
            <Route path="/" element={<LandinPage/>}/>
            <Route path="/drinksDetails" element="Detalles del trago"/>
            
            </Routes>
        </BrowserRouter>
    )
};
