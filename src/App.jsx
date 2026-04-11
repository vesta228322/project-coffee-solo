import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import OurCoffee from './pages/OurCoffee/OurCoffee';
import ProductPage from './components/ProductPage/ProductPage';
import ForYourPleasure from './pages/ForYourPleasure/ForYourPleasure';


import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/our-coffee" element={<OurCoffee />} />
					<Route path='/for-your-pleasure' element={<ForYourPleasure />} />
					<Route path="/product/:id" element={<ProductPage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
