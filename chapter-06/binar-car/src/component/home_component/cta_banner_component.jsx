import { useNavigate } from "react-router-dom";
import '../../style/home.css';

const CTABannerComponent = () => {
    const navigate = useNavigate();
    return (
        <>
              <section className="cta-banner-section">
                    <div className="banner">
                        <h2>Sewa Mobil di Lumajang Sekarang</h2>
                        <blockquote>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                        </blockquote>
                        <div className="separated" />
                        <button id="rentCarButton2" type="button" onClick={()=>{  navigate('/searchCar')  }}>
                            Mulai Sewa Mobil
                        </button>
                    </div>
                </section>
        </>
    )
}

export default CTABannerComponent;