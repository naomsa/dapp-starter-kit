import { DAppProvider } from "@usedapp/core";

import dappConfig from "../configs/dappConfig";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: any) {
	return (
		<DAppProvider config={dappConfig}>
			<Component {...pageProps} />
		</DAppProvider>
	);
}
