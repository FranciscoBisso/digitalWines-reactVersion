import { Helmet } from "react-helmet";

function Add({ pageTitle }) {
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="¡Bienvenido a nuestra página para agregar un nuevo vino!"
                />
            </Helmet>
        </>
    );
}

export default Add;
