import BeansDivider from "../ui/BeansDivider";

import "./InfoSection.scss";

export default function InfoSection({ title, image, descr }) {
    return (
        <section className="info-section">
            <div className="container">
                <div className="info-section__wrapper">
                    <div className="info-section__image">
                        <img src={image} alt="girl" />
                    </div>
                    <div className="info-section__content">
                        <h2 className="info-section__title">{title}</h2>
                        <BeansDivider color="black" />
                        <div className="info-section__descr-wra">
                            {(Array.isArray(descr) ? descr.map((item, i) => {
                                return (
                                    <p className="info-section__text" key={i}>{item}</p>
                                )
                            }) : <p className="info-section__text">{descr}</p>)}
                        </div>
                    </div>
                </div>
                <div className="info-section__divider"></div>
            </div>
        </section>
    )
}