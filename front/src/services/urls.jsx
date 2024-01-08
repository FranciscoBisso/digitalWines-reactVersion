export const homeUrl = "http://localhost:3001/api/home";
export const winecellarUrl = "http://localhost:3001/api/wines/winecellar";
export const addWineUrl = "http://localhost:3001/api/wines/create";

export const detailsUrl = (id) => {
	return `http://localhost:3001/api/wines/details/${id}`;
};
