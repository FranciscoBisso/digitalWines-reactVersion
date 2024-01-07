import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom";
import { lazy } from "react";
// LAYOUTS - PAGES - COMPONENTS
import RootLayout from "./layouts/RootLayout/RootLayout";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
// Página del home
const Home = lazy(() => import("./pages/home/Home"));

// Páginas de los usuarios
const Login = lazy(() => import("./pages/users/login/Login"));
const Register = lazy(() => import("./pages/users/register/Register"));
const Cuenta = lazy(() => import("./pages/users/cuenta/Cuenta"));
const Cava = lazy(() => import("./pages/users/cava/Cava"));

// Páginas de los vinos
const Winecellar = lazy(() => import("./pages/wines/winecellar/Winecellar"));
const Add = lazy(() => import("./pages/admin/addWine/Add"));
const Details = lazy(() => import("./pages/wines/details/Details"));
const Edit = lazy(() => import("./pages/admin/editWine/Edit"));
const Delete = lazy(() => import("./pages/admin/deleteWine/Delete"));

// Fallback Components
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<RootLayout />}>
			<Route
				index
				element={<Home pageTitle={"Digital Wines"} />}
			/>

			<Route
				path="vinoteca"
				element={<Winecellar pageTitle={"Vinoteca"} />}
			/>

			<Route
				path="detalle/:id"
				element={<Details pageTitle={"Detalles"} />}
			/>

			<Route
				path="login"
				element={<Login pageTitle={"Login"} />}
			/>
			<Route
				path="registro"
				element={<Register pageTitle={"Registro"} />}
			/>
			<Route
				path="cava"
				element={<Cava pageTitle={"Mi cava"} />}
			/>
			<Route
				path="cuenta"
				element={<Cuenta pageTitle={"Mi cuenta"} />}
			/>
			<Route
				path="*"
				element={<NotFound pageTitle={"Ups! 404"} />}
			/>
			<Route
				path="/admin"
				element={<AdminLayout />}>
				<Route
					path="agregar"
					element={<Add pageTitle={"Agregar"} />}
				/>
				<Route
					path="editar/:id"
					element={<Edit pageTitle={"Editar"} />}
				/>
				<Route
					path="eliminar/:id"
					element={<Delete pageTitle={"Eliminar"} />}
				/>
			</Route>
		</Route>
	)
);

export default function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}
