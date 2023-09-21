import "@/styles/globals.css";
import "@/styles/profile.css";
import "@/styles/navbar.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { SessionProvider } from "next-auth/react";
import "../styles/login.css"
config.autoAddCss = false;

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>

			{/* Global Styles */}
			<style jsx global>{`

			`}</style>

		</>
	);
}
