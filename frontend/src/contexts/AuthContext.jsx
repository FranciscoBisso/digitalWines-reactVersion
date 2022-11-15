import { createContext, useReducer } from "react";

// creo contexto
export const AuthContext = createContext();

// función que sirve de 1er argumento del useReducer()
// action tiene dos propiedades: type -que describe la acción- y payload -lo que recibo desde el server-
export const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return { user: action.payload };
		case "LOGOUT":
			return { user: null };
		default:
			return state; // el state original que está seteado a null
	}
};

// componente -igual que todos los otros- que provee el contexto de auth. Actúa como PROVEEDOR
export function AuthContextProvider({ children }) {
	// determino/registro el valor del contexto que estoy proveyendo. Como es dinámico, uso el hook useReducer() que maneja el contenido del contexto -del componente que provee el contexto-.
	const [state, dispatch] = useReducer(authReducer, { user: null });

	console.log("AuthContext state: ", state);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
}
