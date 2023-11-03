import '../../style/home.css';

const OurServiceComponent = () => {
    return (
        <>
            <section className="our-service-section" id="our-service">
                    <div className="wrapper row d-flex flex-column d-sm-flex flex-sm-row ">
                        <div className="image-content col-12 col-sm-6 ">
                            <img className="service-image" src="/static/images/img-service.png" alt="about-photos" />
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
                                    <img src="/static/images/icon/icon-check.png" alt="icon-check" />
                                    <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                                </li>
                                <li>
                                    <img src="/static/images/icon/icon-check.png" alt="icon-check" />
                                    <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                                </li>
                                <li>
                                    <img src="/static/images/icon/icon-check.png" alt="icon-check" />
                                    <p>Sewa Mobil Jangka Panjang Bulanan</p>
                                </li>
                                <li>
                                    <img src="/static/images/icon/icon-check.png" alt="icon-check" />
                                    <p>Gratis Antar - Jemput Mobil di Bandara</p>
                                </li>
                                <li>
                                    <img src="/static/images/icon/icon-check.png" alt="icon-check" />
                                    <p>Layanan Airport Transfer / Drop In Out</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
        </>
    )
}

export default OurServiceComponent;