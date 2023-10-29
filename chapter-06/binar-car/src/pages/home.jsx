import FooterComponent from '../component/footer_component';
import NavbarComponent from '../component/navbar_component';
import HeroSectionComponent from '../component/hero_section_component';
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
                <section className="our-service-section" id="our-service">
                    <div className="wrapper row d-flex flex-column d-sm-flex flex-sm-row ">
                        <div className="image-content col-12 col-sm-6 ">
                            <img className="service-image" src="../src/assets/images/img-service.png" alt="about-photos" />
                        </div>
                        <div className="text-content col-12 col-sm-6">
                            <h2>Best Car Rental for any kind of trip in Lumajang</h2>
                            <blockquote>
                                Sewa mobil di Lumajang bersama Binar Car Rental jaminan harga lebih
                                murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
                                pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
                                dll.
                            </blockquote>
                            <ul>
                                <li>
                                    <img src="../src/assets/images/icon/icon-check.png" alt="icon-check" />
                                    <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                                </li>
                                <li>
                                    <img src="../src/assets/images/icon/icon-check.png" alt="icon-check" />
                                    <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                                </li>
                                <li>
                                    <img src="../src/assets/images/icon/icon-check.png" alt="icon-check" />
                                    <p>Sewa Mobil Jangka Panjang Bulanan</p>
                                </li>
                                <li>
                                    <img src="../src/assets/images/icon/icon-check.png" alt="icon-check" />
                                    <p>Gratis Antar - Jemput Mobil di Bandara</p>
                                </li>
                                <li>
                                    <img src="../src/assets/images/icon/icon-check.png" alt="icon-check" />
                                    <p>Layanan Airport Transfer / Drop In Out</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/* why us */}
                <section className="why-us-section" id="why-us">
                    <div className="wrap-title">
                        <h2>Why Us</h2>
                        <p>Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                    <div className="
                    why-content 
                    d-flex 
                    flex-nowrap
                    flex-column 
                    flex-sm-row 
                    flex-sm-wrap
                    flex-lg-row  
                    flex-lg-wrap
                    flex-xl-row
                    flex-xl-nowrap
                    ">
                        <div className="content-card col-12 col-sm-5 col-lg-3 ">
                            <img className="icon-why-section" src="../src/assets/images/icon/icon-thumbs.png" alt="icon" />
                            <h4>Mobil Lengkap</h4>
                            <blockquote>
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                                terawat
                            </blockquote>
                        </div>
                        <div className="content-card col-12 col-sm-5 col-lg-3">
                            <img className="icon-why-section" src="../src/assets/images/icon/icon-price.png" alt="icon" />
                            <h4>Harga Murah</h4>
                            <blockquote>
                                Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                                mobil lain
                            </blockquote>
                        </div>
                        <div className="content-card col-12 col-sm-5 col-lg-3">
                            <img className="icon-why-section" src="../src/assets/images/icon/icon-clock.png" alt="icon" />
                            <h4>Layanan 24 Jam</h4>
                            <blockquote>
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                tersedia di akhir minggu
                            </blockquote>
                        </div>
                        <div className="content-card col-12 col-sm-5 col-lg-3">
                            <img className="icon-why-section" src="../src/assets/images/icon/icon-medal.png" alt="icon" />
                            <h4>Sopir Profesional</h4>
                            <blockquote>
                                Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
                                waktu
                            </blockquote>
                        </div>
                    </div>
                </section>
                {/* testimonial */}
                <section className="testimonial-section" id="testimonial">
                    <div className="wrap-title">
                        <h2>Testimonial</h2>
                        <p>Berbagai review positif dari para pelanggan kami</p>
                    </div>
                    {/* caraousel slider */}
                    <div id="carouselControls" className="carousel slide wrapper-carousel" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="wrapper-item">
                                    <img src="../src/assets/images/user-image.png" alt="First slide" />
                                    <div className="text-content">
                                        <div className="wrapper-star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <blockquote>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod”
                                        </blockquote>
                                        <h4>John Dee 32, Bromo</h4>
                                    </div>
                                </div>
                            </div>
                            {/* */}
                            <div className="carousel-item">
                                <div className="wrapper-item">
                                    <img src="../src/assets/images/user-image.png" alt="two slide" />
                                    <div className="text-content">
                                        <div className="wrapper-star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <blockquote>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod”
                                        </blockquote>
                                        <h4>John Dee 32, Bromo</h4>
                                    </div>
                                </div>
                            </div>
                            {/* */}
                            <div className="carousel-item">
                                <div className="wrapper-item">
                                    <img src="../src/assets/images/user-image.png" alt="Third slide" />
                                    <div className="text-content">
                                        <div className="wrapper-star">
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                            <i className="fa-solid fa-star" />
                                        </div>
                                        <blockquote>
                                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                                            adipiscing elit, sed do eiusmod”
                                        </blockquote>
                                        <h4>John Dee 32, Bromo</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* */}
                        <a className="carousel-control-prev" data-bs-target="#carouselControls" type="button"
                            data-bs-slide="prev">
                            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
                        </a>
                        <a className="carousel-control-next" data-bs-target="#carouselControls" type="button"
                            data-bs-slide="next">
                            <i className="fa-solid fa-chevron-right " aria-hidden="true" />
                        </a>
                        {/* */}
                    </div>
                </section>
                {/* CTA Banner */}
                <section className="cta-banner-section">
                    <div className="banner">
                        <h2>Sewa Mobil di Lumajang Sekarang</h2>
                        <blockquote>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                        </blockquote>
                        <div className="separated" />
                        <button id="rentCarButton2" type="button">
                            Mulai Sewa Mobil
                        </button>
                    </div>
                </section>
                {/* FAQ */}
                <section className="faq-section" id="faq">
                    <div className="row">
                        <div className="col-sm-6 title-content">
                            <h2>Frequently Asked Question</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <div className="accordion col-sm-6 text-content" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Apa saja syarat yang dibutuhkan?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <blockquote>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. when an unknown printer took a galley of
                                            type and scrambled it to make a type specimen book.
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            {/* */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Berapa hari minimal sewa mobil lepas kunci?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <blockquote>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. when an unknown printer took a galley of
                                            type and scrambled it to make a type specimen book.
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            {/* */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <blockquote>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. when an unknown printer took a galley of
                                            type and scrambled it to make a type specimen book.
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            {/* */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour+">
                                        Apakah Ada biaya antar-jemput?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <blockquote>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. when an unknown printer took a galley of
                                            type and scrambled it to make a type specimen book.
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            {/* */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Bagaimana jika terjadi kecelakaan
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <blockquote>
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. when an unknown printer took a galley of
                                            type and scrambled it to make a type specimen book.
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            {/* */}
                        </div>
                    </div>
                </section>
            </main>
            {/* footer */}
            <FooterComponent/>
        </>
    );
}

export default Home;