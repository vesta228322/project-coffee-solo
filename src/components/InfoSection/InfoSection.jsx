import BeansDivider from "../ui/BeansDivider";

import "./InfoSection.scss";

export default function InfoSection({ title, image, alt, descr, children, extraClass }) {
    return (
        <section className={`info-section ${extraClass}`}>
            <div className="container">
                <div className="info-section__wrapper">
                    <div className="info-section__image">
                        <img src={image} alt={alt} />
                    </div>
                    <div className="info-section__content">
                        <h2 className="info-section__title">{title}</h2>
                        <BeansDivider color="black" />
                        <div >
                            {(Array.isArray(descr) ?
                                descr.map((item, i) => {
                                    return (
                                        <p className="info-section__text" key={i}>{item}</p>
                                    )
                                }) :
                                <p className="info-section__text">{descr}</p>
                            )}
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}