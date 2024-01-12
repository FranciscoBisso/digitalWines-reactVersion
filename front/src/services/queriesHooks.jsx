import { useQuery } from "@tanstack/react-query";
import { get } from "./fetchData";
import { homeUrl } from "./urls";

export const useHomeQuery = () => {
	return useQuery({
		queryKey: ["homeQuery"],
		queryFn: () => get(homeUrl),
	});
};
