
import "./app.css";
import { LandinPage } from "./pages/LandingPage";
import { DrinksDetails } from "./pages/DrinksDetails";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export const App = () => {



    return (
        <BrowserRouter>
            <header >
                <Link to="/" className="title">
                    <h1 className="title">THE COCKTAIL DB</h1>
                </Link>
            </header>
            <Routes>
                <Route path="/" element={<LandinPage />} />
                <Route path="/drink/:idDrink" element={<DrinksDetails />} />

            </Routes>
        </BrowserRouter >
    )
};
