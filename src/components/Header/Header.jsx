import CoffeeBeans from '../ui/CoffeeBeans';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to="/" className="header__link">
                                <CoffeeBeans logoColor="coffee-beans" />
                                Coffee house</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/our-coffee" className="header__link">Our Coffee</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/for-your-pleasure" className="header__link">For your pleasure</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}