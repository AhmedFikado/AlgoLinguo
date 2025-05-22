function Header() {
	return (
		<section className="flex items-center justify-center bg-secondary h-[100px]">
			<img
				src="\src\assets\images\Avatar-header.webp"
				alt="Une mascotte d'ordinateur vert tout mimi"
				className="w-[100px] h-auto"
			/>
			<h1 className="text-6xl text-primary">AlgoLinguo</h1>
		</section>
	);
}

export default Header;
