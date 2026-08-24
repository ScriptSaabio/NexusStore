import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Games from "./pages/Games";
import Roupas from "./pages/Roupas";
import Tenis from "./pages/Tenis";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/games" element={<Games />} />

                <Route path="/roupas" element={<Roupas />} />

                <Route path="/tenis" element={<Tenis />} />

            </Routes>

        </BrowserRouter>

    );
}

export default App;