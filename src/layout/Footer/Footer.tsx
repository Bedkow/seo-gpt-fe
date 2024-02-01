import LinkButton from "../../components/LinkButton/LinkButton";

const Footer = () => {
	return (
		<footer className='bg-bgmain text-tmain h-16 border-t-2'>
			<nav>
				<ul className='flex flex-row justify-center gap-10'>
					<li>
						<LinkButton buttonLink='/linkedinlink'>
							Author: Daniel Bednarek
						</LinkButton>
					</li>
					<li>
						<LinkButton buttonLink='/helplink'>Help: Help Link</LinkButton>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
