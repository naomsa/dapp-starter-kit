import { ChainId, Config } from "@usedapp/core";

const dappConfig: Config = {
	readOnlyChainId: ChainId.Mainnet,
	readOnlyUrls: {
		[ChainId.Mainnet]: process.env.NEXT_PUBLIC_RPC_URL!,
	},
};

export default dappConfig;
