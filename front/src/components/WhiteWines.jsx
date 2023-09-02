import { Helmet } from "react-helmet";

function WhiteWines() {
	return (
    <>
      <Helmet>
        <title>DW | Blancos</title>
        <meta
          name="description"
          content="¡Bienvenido a nuestra página para ver nuestros vinos tinto!"
        />
      </Helmet>
      <h2 style={{ color: "white" }}>Los mejores blancos</h2>
    </>
  );
}

export default WhiteWines;
