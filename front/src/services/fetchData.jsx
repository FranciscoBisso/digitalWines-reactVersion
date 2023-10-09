export const fetchData = async (url) => {
	const res = await fetch(url);
	if (res.ok) {
		return res.json();
	}
};
