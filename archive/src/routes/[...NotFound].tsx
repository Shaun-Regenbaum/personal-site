import { A } from 'solid-start';

export default function NotFound() {
	return (
		<main class='bg-black h-screen w-full pl-12 pr-4 pt-12 font-coolvetica tracking-wide text-blue-50 text-3xl'>
			<h1 class='mx-auto'>
				<span class='font-pixel'>404</span> {'  '}
				<span class='text-sm'>Page Not Found</span>
			</h1>

			<br></br>
			<h2>What Is The Road To Wisdom?</h2>
			<br></br>
			<p>Well, Its Plain</p>
			<p>And Simple To Express:</p>
			<br></br>
			<p>Err</p>
			<p>
				<span class='ml-[40px]'></span>And Err
			</p>
			<p>
				<span class='ml-[40px]'></span>
				<span class='ml-[40px]'></span>And Err Again.
			</p>
			<br></br>

			<p>But Less</p>
			<p>
				<span class='ml-[40px]'></span>And Less
			</p>
			<p>
				<span class='ml-[40px]'></span>
				<span class='ml-[40px]'></span>And Less.
			</p>
			<br></br>
			<p> _____ </p>
			<p class='font-pixel'>Piet Hein</p>
			<br></br>
			<p>
				{' '}
				Go Back{' '}
				<A
					class='text-blue-500'
					href='./'
				>
					Home
				</A>
			</p>
		</main>
	);
}
