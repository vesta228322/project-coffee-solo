import CoffeeBeans from '../ui/CoffeeBeans';
// import logo from '../../assets/img/coffee-beans.svg';

import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <a href="#" className="header__link">
                                {/* <img src={logo} alt="logo" className="header__logo" /> */}
                                <CoffeeBeans logoColor="coffee-beans" />
                                Coffee house</a>
                        </li>
                        <li className="header__item">
                            <a href="#" className="header__link">Our Coffee</a>
                        </li>
                        <li className="header__item">
                            <a href="#" className="header__link">For your pleasure</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}