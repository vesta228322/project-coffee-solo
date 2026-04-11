import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InfoSection from "../../components/InfoSection/InfoSection";
import PageBanner from "../../components/PageBanner/PageBanner";
import coffee from "../../assets/img/coffee mug.jpg"
import Catalog from "../../components/Catalog/Catalog";


export default function ForYourPleasure() {
    return (
        <>
            <Header />
            <main>
                <PageBanner title="For your pleasure" bgClass="page-banner__for-your-pleasure" />
                <InfoSection title="About our goods" image={coffee} alt="girl" descr={["Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.", "Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."]} />
                <Catalog bannerTitle="For your pleasure" bannerClass="page-banner__for-your-pleasure" />
            </main>
            <Footer />
        </>
    );
}