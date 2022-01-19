import Link from "next/link";
import { getExplorerTransactionLink, TransactionStatus } from "@usedapp/core";

import formatException from "../utils/formatException";

interface TransactionProps {
	tx: TransactionStatus;
	success?: string;
	exception?: string;
	fail?: string;
}

export default function Transaction({
	tx,
	success,
	exception,
	fail,
}: TransactionProps) {
	switch (tx.status) {
		case "Mining":
			return (
				<div>
					<span>Transaction pending...</span>
					{tx.transaction && (
						<span>
							Check it out on the{" "}
							<Link
								href={getExplorerTransactionLink(
									tx.transaction.hash,
									tx.chainId!
								)}
							>
								<a target="_blank">explorer</a>
							</Link>
						</span>
					)}
				</div>
			);
		case "Success":
			return (
				<div>
					<span>{success || "Your transaction has been completed"}</span>
				</div>
			);
		case "Fail":
			return (
				<div>
					<span>{fail || "Your transaction failed"}</span>
				</div>
			);
		case "Exception":
			return <span>{exception || formatException(tx.errorMessage!)}</span>;
		default:
			return null;
	}
}
