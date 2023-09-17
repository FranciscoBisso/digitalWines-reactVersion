import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
// LAYOUTS - PAGES - COMPONENTS
import RootLayout from "./layouts/RootLayout/RootLayout";
// Página del home
import Home from "./pages/home/Home";
// Páginas de los usuarios
import Login from "./pages/users/login/Login";
import Register from "./pages/users/register/Register";
import Cuenta from "./pages/users/cuenta/Cuenta";
import Cava from "./pages/users/cava/Cava";
// Páginas de los vinos
import Winecellar from "./pages/wines/winecellar/Winecellar";
import Add from "./pages/admin/addWine/Add";
import Details from "./pages/wines/details/Details";
import Edit from "./pages/admin/editWine/Edit";
import Delete from "./pages/admin/deleteWine/Delete";
// 404
import NotFound from "./pages/notFound/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home pageTitle={"Digital Wines"} />} />
            <Route
                path="vinoteca"
                element={<Winecellar pageTitle={"Vinoteca"} />}
            />

            <Route
                path="detalle/:id"
                element={<Details pageTitle={"Detalles"} />}
            />

            <Route path="login" element={<Login pageTitle={"Login"} />} />
            <Route
                path="registro"
                element={<Register pageTitle={"Registro"} />}
            />
            <Route path="cava" element={<Cava pageTitle={"Mi cava"} />} />
            <Route path="cuenta" element={<Cuenta pageTitle={"Mi cuenta"} />} />
            <Route path="*" element={<NotFound pageTitle={"Ups! 404"} />} />
            <Route path="/admin">
                <Route path="agregar" element={<Add pageTitle={"Agregar"} />} />
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
