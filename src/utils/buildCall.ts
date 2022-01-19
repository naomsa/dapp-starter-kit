import { ContractCall } from "@usedapp/core";
import { Interface } from "@ethersproject/abi";

export default function buildCall(
	abi: Interface,
	address: string,
	method: string,
	args: any[] = []
): ContractCall {
	return {
		abi,
		address,
		method,
		args,
	};
}
