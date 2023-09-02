import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
// LAYOUTS - PAGES - COMPONENTS
import RootLayout from "./layouts/RootLayout";
import WinecellarLayout from "./layouts/WinecellarLayout";
//
import Home from "./pages/Home";
//
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
//
import Add from "./pages/wines/Add";
import Details from "./pages/wines/Details";
import Edit from "./pages/wines/Edit";
import Delete from "./pages/wines/Delete";
//
import NotFound from "./pages/NotFound";
import RedWines from "./components/RedWines";
import WhiteWines from "./components/WhiteWines";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="vinoteca" element={<WinecellarLayout />}>
				<Route path="tintos" element={<RedWines/>}/>
				<Route path="blancos" element={<WhiteWines/>}/>
			</Route> 
			<Route path="agregar" element={<Add />} />
			<Route path="detalle/:id" element={<Details />} />
			<Route path="editar/:id" element={<Edit />} />
			<Route path="eliminar/:id" element={<Delete />} />
			<Route path="*" element={<NotFound />} />
			<Route path="login" element={<Login />} />
			<Route path="registro" element={<Register />} />
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
