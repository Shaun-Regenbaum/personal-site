import Nav from '../components/Nav';
export default function Home() {
	return (
		<div>
			<Nav />
			<main class='mx-auto bg-gray-800 h-screen'>
				<section class='pl-4 pt-4'>
					<h1 class='font-pixel body-font text-white text-5xl'>
						I am Shaun Regenbaum
					</h1>
				</section>
			</main>
		</div>
	);
}
