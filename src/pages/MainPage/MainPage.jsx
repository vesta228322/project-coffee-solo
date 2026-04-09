import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurBest from "../../components/OurBest/OurBest";
import Footer from "../../components/Footer/Footer";


export default function MainPage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <AboutUs />
                <OurBest />
            </main>
            <Footer />
        </>
    );
}

