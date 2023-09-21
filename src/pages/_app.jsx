import "@/styles/globals.css";
import "@/styles/profile.css";
import "@/styles/navbar.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { SessionProvider } from "next-auth/react";
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
				:root {
					--color-elevated-green: #005837;
					--color-topographic-green: #00A62E;
					--color-background: #FCFCFC;
					--color-background-decoration: #F2F2F2;
					--color-dividers: #DFDFDF;
					--color-font-primary: #000000;
					--color-font-primary: #5C5C5C;

					--font-calps: "Calps", sans-serif;
					--font-roboto: "Roboto Condensed", sans-serif;
					--font-size-header-L: 96px;
					--font-size-header-M: 64px;
					--font-size-header-S: 48px;
					--font-size-header-XS: 32px;

					--font-size-body-S: 12px;
					--font-size-body-M: 14px;
					--font-size-body-L: 20px;

					--shadow-box: 0px 4px 2px rgba(0, 0, 0, 0.381);
					--border-radius-pill: max(100vh, 100vw);
					--border-grey-thin: 1px solid rgb(209, 209, 209);
				}
			`}</style>
		</>
	);
}
