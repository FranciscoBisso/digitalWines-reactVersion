import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
	const { dispatch } = useAuthContext();

	const logout = () => {
		// elimina del localStorage el user
		localStorage.removeItem("user");

		// actualiza el estado global de autContext, lo setea a su valor por defecto: null
		dispatch({ type: "LOGOUT" });
	};
	return { logout };
};
