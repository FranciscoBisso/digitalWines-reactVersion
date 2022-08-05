import { BrowserRouter, Link, Routes, Route, Switch } from "react-router-dom";
import Vinoteca from "./components/wines/Vinoteca";
import AgregarVino from "./components/wines/AgregarVino";
import DetalleVino from "./components/wines/DetalleVino";
import EditarVino from "./components/wines/EditarVino";
import EliminarVino from "./components/wines/EliminarVino";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/vinoteca" element={<Vinoteca />} />
                    <Route path="/agregar" element={<AgregarVino />} />
                    <Route path="/detalle" element={<DetalleVino />} />
                    <Route path="/editar" element={<EditarVino />} />
                    <Route path="/eliminar" element={<EliminarVino />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
