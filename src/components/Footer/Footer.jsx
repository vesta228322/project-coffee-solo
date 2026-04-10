import CoffeeBeans from '../ui/CoffeeBeans';
import BeansDivider from '../ui/BeansDivider';
import { Link } from 'react-router-dom';
import './Footer.scss';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <Link to="/" className="footer__link">
                                <CoffeeBeans logoColor="coffee-beans--black" />
                                Coffee house</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/our-coffee" className="footer__link">Our Coffee</Link>
                        </li>
                        <li className="footer__item">
                            <Link to="/" className="footer__link">For your pleasure</Link>
                        </li>
                    </ul>
                </nav>
                <div className="footer__divider">
                    <BeansDivider color="black" />
                </div>
            </div>

        </footer>
    )
}