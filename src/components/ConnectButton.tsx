import { useState } from "react";
import { shortenAddress, useEthers } from "@usedapp/core";

export default function ConnectButton() {
	const { account, activateBrowserWallet, deactivate } = useEthers();
	const [walletError, setWalletError] = useState<boolean>(false);

	const activate = () => {
		setWalletError(false); // Reset existing errors
		activateBrowserWallet(() => {
			deactivate(); // Deactivate wallet
			setWalletError(true); // Toggle wallet error
		});
	};

	return (
		<button onClick={account ? deactivate : activate}>
			{account
				? shortenAddress(account)
				: walletError
				? "Invalid Network"
				: "Connect"}
		</button>
	);
}
