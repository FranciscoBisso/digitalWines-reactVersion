import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
	const [errors, setErrors] = useState(null);
	const [badCredentials, setBadCredentials] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();

	const login = async (email, password) => {
		setIsLoading(true);
		setErrors(null);
		setBadCredentials(null);

		const response = await fetch("http://localhost:3001/api/users/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});
		const json = await response.json();

		if (response.ok) {
			// guardar en localStorage el user
			localStorage.setItem("user", JSON.stringify(json.loggedUser));

			// actualiza el estado global de autContext
			dispatch({ type: "LOGIN", payload: json });

			setIsLoading(false);

			navigate("/");
		}
		if (!response.ok) {
			setIsLoading(false);

			setErrors(json.formErrors);
			setBadCredentials(json.credentialsError);
		}
	};
	return { login, isLoading, errors, badCredentials };
};
