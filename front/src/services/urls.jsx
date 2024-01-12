const port = import.meta.env.VITE_API_URL || 3001; // <-- This port must match with .env port in the backend

export const homeUrl = `http://localhost:${port}/api/home`;
export const winecellarUrl = `http://localhost:${port}/api/wines/winecellar`;
export const addWineUrl = `http://localhost:${port}/api/wines/create`;

export const detailsUrl = (id) => {
	return `http://localhost:${port}/api/wines/details/${id}`;
};
