import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

function WinecellarLayout() {
	return (
    <>
      <Helmet>
        <title>DW | Vinoteca</title>
        <meta
          name="description"
          content="¡Bienvenido a la página de nuestra vinoteca!"
        />
      </Helmet>
      <h2 style={{ color: "white" }}>Todos nuestros vinos</h2>
      <div>
        <ul>
          <li>
            <NavLink to="tintos">Tintos</NavLink>
          </li>
          <li>
            <NavLink to="blancos">Blancos</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default WinecellarLayout;
