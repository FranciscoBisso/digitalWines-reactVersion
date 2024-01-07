import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../../components/loading/Loading";

export default function AdminLayout() {
	return (
		<>
			<Suspense fallback={<Loading />}>
				<Outlet />
			</Suspense>
		</>
	);
}
