import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Winecellar from "./pages/wines/Winecellar";
import AddWine from "./pages/wines/AddWine";
import DetailsWine from "./pages/wines/DetailsWine";
import EditWine from "./pages/wines/EditWine";
import DeleteWine from "./pages/wines/DeleteWine";
import NotFound from "./components/NotFound";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/vinoteca" element={<Winecellar />} />
					<Route path="/agregar" element={<AddWine />} />
					<Route path="/detalle/:id" element={<DetailsWine />} />
					<Route path="/editar/:id" element={<EditWine />} />
					<Route path="/eliminar/:id" element={<DeleteWine />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registro" element={<Register />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
