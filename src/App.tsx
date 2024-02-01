import "./App.css";
import Layout from "./layout/Layout/Layout";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {
	return (
		<Layout>
			<main className='bg-bgmain text-tmain grow box-border'>
				<AdminPage></AdminPage>
			</main>
		</Layout>
	);
}

export default App;
