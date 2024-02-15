import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='bg-bgmain text-tmain flex flex-col justify-between h-full px-8'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
