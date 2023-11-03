/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import '../style/home.css'

const HeroSectionComponent = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <section className="hero-section container-fluid ">
                <div className="row wrapper d-flex flex-column d-sm-flex flex-sm-row ">
                    <div className="text-content col-12  col-sm-6 justify-content-start align-items-start ">
                        <h1>Sewa &amp; Rental Mobil Terbaik di kawasan Lumajang</h1>
                        <blockquote>
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                            untuk sewa mobil selama 24 jam.
                        </blockquote>
                        <button id="rentCarButton" type="button" style={{
                            display: props.buttonDisplay == 'true' ? '' : 'none'
                        }} onClick={()=>{  navigate('/searchCar')  }} >
                            Mulai Sewa Mobil
                        </button>
                    </div>
                    <div className="image-content col-12 col-sm-6 ">
                        <img className="car-image" src={"/src/assets/images/car-image.png"} alt="car-photos" />
                        <div className="background-img" />
                    </div>
                </div>
            </section>
        </>
    ) 
}

export default HeroSectionComponent;