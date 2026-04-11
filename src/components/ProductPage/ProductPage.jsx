import { useParams } from "react-router-dom";
import InfoSection from "../InfoSection/InfoSection";
import coffeImg from "../../assets/img/coffee-img.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageBanner from "../PageBanner/PageBanner";
import { data } from "../../data";

import "./ProductPage.scss";

export default function ProductPage() {

    const { id } = useParams();
    const coffee = data.find(item => item.id === +id);

    return (
        <>
            <Header />
            <PageBanner title="Our Coffee" bgClass="page-banner__our-coffee" />
            <InfoSection title={'About it'} image={coffeImg} alt="coffe" extraClass="info-section__product">
                <div className="product-info" >
                    <p className="product-info__subtitle" ><b>Country:</b> {coffee.country}</p>
                    <p className="product-info__descr" ><b>Description:</b> {coffee.descr}</p>
                    <p className="product-info__price" >Price: <b>{coffee.price}</b></p>
                </div>
            </InfoSection>
            <Footer />
        </>
    );
}