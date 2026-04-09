import CoffeeBeans from '../ui/CoffeeBeans';
import BeansDivider from '../ui/BeansDivider';

import './Footer.scss';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="#" className="footer__link">
                                <CoffeeBeans logoColor="coffee-beans--black" />
                                Coffee house</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">Our Coffee</a>
                        </li>
                        <li className="footer__item">
                            <a href="#" className="footer__link">For your pleasure</a>
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