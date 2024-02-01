import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col justify-between h-full">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
