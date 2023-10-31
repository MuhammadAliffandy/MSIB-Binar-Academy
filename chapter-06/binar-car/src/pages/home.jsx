import FooterComponent from '../component/footer_component';
import NavbarComponent from '../component/navbar_component';
import HeroSectionComponent from '../component/hero_section_component';
import OurServiceComponent from '../component/home_component/our_service_component';
import WhySectionComponent from '../component/home_component/why_section_component';
import TestimonialSectionComponent from '../component/home_component/testimonial_section_component';
import CTABannerComponent from '../component/home_component/cta_banner_component';
import FAQComponent from '../component/home_component/faq_component';
import '../style/home.css';

const Home = () => {
    return(
        <>
            <NavbarComponent/>
            <main>
                {/* hero section */}
                <HeroSectionComponent
                    buttonDisplay = 'true'
                />
                {/* our service */}
                <OurServiceComponent />
                {/* why us */}
                <WhySectionComponent/>
                {/* testimonial */}
                <TestimonialSectionComponent/>
                {/* CTA Banner */}
                <CTABannerComponent/>
                {/* FAQ */}
                <FAQComponent />
            </main>
            {/* footer */}
            <FooterComponent/>
        </>
    );
}

export default Home;