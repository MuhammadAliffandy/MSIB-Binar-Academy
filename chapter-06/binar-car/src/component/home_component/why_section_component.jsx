import '../../style/home.css'

const WhySectionComponent = () => {
    return (
        <>
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
        </>
    ) 
}

export default WhySectionComponent;