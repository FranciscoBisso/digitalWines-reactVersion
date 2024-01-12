import { useQuery } from "@tanstack/react-query";
import { get } from "./fetchData";
import { homeUrl, detailsUrl, winecellarUrl } from "./urls";

export const useHomeQuery = () => {
	return useQuery({
		queryKey: ["homeQuery"],
		queryFn: () => get(homeUrl),
	});
};

export const useDetailsQuery = (id) => {
	return useQuery({
		queryKey: ["details/", id],
		queryFn: () => get(detailsUrl(id)),
	});
};

export const useWinecellarQuery = () => {
	return useQuery({
		queryKey: ["winecellarQuery"],
		queryFn: () => get(winecellarUrl),
	});
};
