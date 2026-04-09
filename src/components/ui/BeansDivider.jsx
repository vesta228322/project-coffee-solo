import vectorWhite from '../../assets/img/Vector-White.svg';
import vectorBlack from '../../assets/img/Vector-Black.svg';

import './BeansDivider.scss';

export default function BeansDivider({ color = 'white' }) {
    return (
        <div className={`beans-divider beans-divider--${color}`}>
            <span></span>
            <img src={color === 'white' ? vectorWhite : vectorBlack} alt="beans" />
            <span></span>
        </div>
    );
}