
import BeansDivider from '../ui/BeansDivider';
import './Hero.scss';

export default function Hero() {

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <h1 className="hero__title">Everything You Love About Coffee</h1>
                    <div className="hero__line">
                        <BeansDivider color="white" />
                    </div>
                    <div className="hero__subtitle">
                        <p className="hero__subtitle-text">We makes every day full of energy and taste</p>
                        <p className="hero__subtitle-text">Want to try our beans?</p>
                    </div>
                    <button className="hero__button">More</button>
                </div>
            </div>
        </section>
    );
}