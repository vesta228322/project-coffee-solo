import logo from '../../assets/img/coffee-beans.svg';
import logoBlack from '../../assets/img/coffee-beans-black.svg';
import './CoffeeBeans.scss';


export default function CoffeeBeans({ logoColor = "coffee-beans" }) {
    return (
        <img src={logoColor === "coffee-beans" ? logo : logoBlack} alt="logo" className={logoColor} />
    );
}