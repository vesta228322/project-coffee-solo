import solimo from '../../assets/img/our-best/solimo.png';
import presto from '../../assets/img/our-best/presto.png';
import aromistico from '../../assets/img/our-best/aromistico.png';


import './OurBest.scss';

export default function OurBest() {
    return (
        <section className="our-best">
            <div className="container">
                <h2 className="our-best__title">Our best</h2>
                <div className="our-best__items">
                    <div className="our-best__item">
                        <img src={solimo} alt="" />
                        <div className="our-best__item-content">
                            <h3 className="our-best__item-title">Solimo Coffee Beans 2 kg</h3>
                            <span className="our-best__item-price">10.73$</span>
                        </div>
                    </div>
                    <div className="our-best__item">
                        <img src={presto} alt="" />
                        <div className="our-best__item-content">
                            <h3 className="our-best__item-title">Presto Coffee Beans 1 kg</h3>
                            <span className="our-best__item-price">15.99$</span>
                        </div>
                    </div>
                    <div className="our-best__item">
                        <img src={aromistico} alt="" />
                        <div className="our-best__item-content">
                            <h3 className="our-best__item-title">AROMISTICO Coffee 1 kg</h3>
                            <span className="our-best__item-price">6.99$</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}