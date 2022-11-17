import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
	const [errors, setErrors] = useState(null);
	const [notNew, setNotNew] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();

	const register = async (formData) => {
		setIsLoading(true);
		setErrors(null);
		setNotNew(null);

		const response = await fetch(
			"http://localhost:3001/api/users/register",
			{
				method: "POST",
				body: formData,
			}
		);
		const json = await response.json();

		if (response.ok) {
			// guardar en localStorage el user
			localStorage.setItem("user", JSON.stringify(json.newUser));

			// useAuthContext
			dispatch({ type: "LOGIN", payload: json });
			setIsLoading(false);

			navigate("/");
		}
		if (!response.ok) {
			setIsLoading(false);

			setErrors(json.errors);

			setNotNew(json.credentialsError);
		}
	};
	return { register, isLoading, errors, notNew };
};
