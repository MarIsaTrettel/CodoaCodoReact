import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Show } from "./components/Show";
import { Edit } from "./components/Edit";
import { Create } from "./components/Create";

export const App = () => {

    return (
        <div className="App">

            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Show />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit/:id" element={<Edit />} />
                </Routes>

            </BrowserRouter>

        </div>
    )

}