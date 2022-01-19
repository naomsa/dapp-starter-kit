export default function Home() {
	return (
		<div className="flex flex-col items-center gap-4 pt-12 text-pink-500">
			<span className="text-4xl font-bold">Hello, world!</span>
			<iframe
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				frameBorder="0"
				height="512"
				sandbox="allow-scripts"
				src="https://ipfs.io/ipfs/QmcnVD7YJzZQDm96Bdzc1m4XJGPo7NMDb3DuHriWBwZFEz/1311220026f1121101.html"
				width="512px"
				className="border-4 border-pink-500"
			></iframe>
		</div>
	);
}
