export default function formatException(exception: string) {
	return exception.split(":").slice(1)[0].trim();
}
