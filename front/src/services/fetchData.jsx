// export const fetchData = async (url) => {
// 	const res = await fetch(url);
// 	if (!res.ok) {
// 		const msg = await res.json();
// 		throw new Error(`${msg?.error}`);
// 	}
// 	return res.json();
// };

export const get = async (url) => {
	const res = await fetch(url);
	if (!res.ok) {
		const msg = await res.json();
		throw new Error(`${msg?.error}`);
	}
	return res.json();
};
