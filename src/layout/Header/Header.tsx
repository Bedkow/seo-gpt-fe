import LinkButton from "../../components/LinkButton/LinkButton";

const Header = () => {
	return (
		<header className='bg-bgmain text-tmain h-20 border-b-2'>
			<nav>
				<ul className='flex flex-row justify-center gap-10'>
					<li>
						<LinkButton buttonLink='/chat' isNavButton={true}>
							Chat
						</LinkButton>
					</li>
					<li>
						<LinkButton buttonLink='/admin-panel' isNavButton={true}>
							Admin Panel
						</LinkButton>
					</li>
					<li>
						<LinkButton buttonLink='/log-out' isNavButton={true}>
							Log Out
						</LinkButton>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
