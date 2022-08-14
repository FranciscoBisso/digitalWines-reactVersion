import { BrowserRouter, Link, Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Vinoteca from "./pages/Vinoteca";
import AgregarVino from "./pages/AgregarVino";
import DetalleVino from "./pages/DetalleVino";
import EditarVino from "./pages/EditarVino";
import EliminarVino from "./pages/EliminarVino";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vinoteca" element={<Vinoteca />} />
                    <Route path="/agregar" element={<AgregarVino />} />
                    <Route path="/detalle/:id" element={<DetalleVino />} />
                    <Route path="/editar/:id" element={<EditarVino />} />
                    <Route path="/eliminar/:id" element={<EliminarVino />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
