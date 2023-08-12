import { BrowserRouter, Routes, Route } from "react-router-dom";
// HOME
import Home from "./pages/Home";
// USERS
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
// WINES
import Winecellar from "./pages/wines/Winecellar";
import Add from "./pages/wines/Add";
import Details from "./pages/wines/Details";
import Edit from "./pages/wines/Edit";
import Delete from "./pages/wines/Delete";
// 404
import NotFound from "./pages/NotFound";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/vinoteca" element={<Winecellar />} />
					<Route path="/agregar" element={<Add />} />
					<Route path="/detalle/:id" element={<Details />} />
					<Route path="/editar/:id" element={<Edit />} />
					<Route path="/eliminar/:id" element={<Delete />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registro" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
