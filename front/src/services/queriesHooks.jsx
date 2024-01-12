import { useQuery } from "@tanstack/react-query";
import { get } from "./fetchData";
import { homeUrl, detailsUrl } from "./urls";

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
