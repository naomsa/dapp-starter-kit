import type { Interface } from "@ethersproject/abi";
import type { Provider } from "@ethersproject/providers";
import type { Signer } from "@ethersproject/abstract-signer";
import { Contract } from "ethers";

export default function buildContract(
	abi: Interface,
	address: string,
	signerOrProvider: Provider | Signer
): Contract {
	return new Contract(address, abi, signerOrProvider);
}
