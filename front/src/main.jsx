import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../index.css";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<NextUIProvider>
				<App />
				{/* <ReactQueryDevtools initialIsOpen={false} />; */}
			</NextUIProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
