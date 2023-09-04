import { Helmet } from "react-helmet";

function Edit({ pageTitle }) {
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="¡Bienvenido a nuestra página para editar un vino!"
                />
            </Helmet>
        </>
    );
}

export default Edit;
