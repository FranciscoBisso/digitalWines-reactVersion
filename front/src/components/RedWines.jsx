import { Helmet } from "react-helmet";

function RedWines() {
	return (
		<>
			<Helmet>
				<title>DW | Tintos</title>
				<meta
					name="description"
					content="¡Bienvenido a nuestra página para ver nuestros vinos tinto!"
				/>
			</Helmet>
            <h2 style={{color: "white"}}>Los mejores tintos</h2>
		</>
	);
}

export default RedWines;
