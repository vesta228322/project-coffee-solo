import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import OurCoffee from './pages/OurCoffee/OurCoffee';
import ProductPage from './components/ProductPage/ProductPage';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/our-coffee" element={<OurCoffee />} />
					<Route path="/our-coffee/:id" element={<ProductPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
