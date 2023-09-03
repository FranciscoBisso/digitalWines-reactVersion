import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
// LAYOUTS - PAGES - COMPONENTS
import RootLayout from "./layouts/RootLayout";
//
import Home from "./pages/Home";
//
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
//
import Winecellar from "./pages/wines/Winecellar";
import Add from "./pages/wines/Add";
import Details from "./pages/wines/Details";
import Edit from "./pages/wines/Edit";
import Delete from "./pages/wines/Delete";
//
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home pageTitle={"Digital Wines"} />} />
            <Route
                path="vinoteca"
                element={<Winecellar pageTitle={"Vinoteca"} />}
            />
            <Route path="agregar" element={<Add pageTitle={"Agregar"} />} />
            <Route path="detalle/:id" element={<Details pageTitle={"Detalles"} />} />
            <Route path="editar/:id" element={<Edit pageTitle={"Editar"} />} />
            <Route path="eliminar/:id" element={<Delete pageTitle={"Eliminar"} />} />
            <Route path="*" element={<NotFound pageTitle={"Ups! 404"} />} />
            <Route path="login" element={<Login pageTitle={"Login"} />} />
            <Route path="registro" element={<Register pageTitle={"Registro"} />} />
        </Route>
    )
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
