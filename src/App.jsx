import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import OurCoffee from './pages/OurCoffee/OurCoffee';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/our-coffee" element={<OurCoffee />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
