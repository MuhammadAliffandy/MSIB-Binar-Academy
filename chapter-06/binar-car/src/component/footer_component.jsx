import '../style/home.css';

const FooterComponent = () => {
    return ( 
        <>
            <footer>
                <div className="footer-wrapper d-flex flex-column flex-sm-column flex-lg-row">
                    {/* address */}
                    <div className="address">
                        <h4>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h4>
                        <h4>binarcarrental@gmail.com</h4>
                        <h4>081-233-334-808</h4>
                    </div>
                    {/* navigation */}
                    <div className="navigation">
                        <ul>
                            <li>Our Services</li>
                            <li>Why Us</li>
                            <li>Testimonial</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    {/* sosmed */}
                    <div className="sosmed">
                        <h4>Connect with us</h4>
                        <ul>
                            <li>
                                <img src="/src/assets/images/icon/sosmed/icon-facebook.png" alt="icon-sosmed" />
                            </li>
                            <li>
                                <img src="/src/assets/images/icon/sosmed/icon-instagram.png" alt="icon-sosmed" />
                            </li>
                            <li>
                                <img src="/src/assets/images/icon/sosmed/icon-twitter.png" alt="icon-sosmed" />
                            </li>
                            <li>
                                <img src="/src/assets/images/icon/sosmed/icon-mail.png" alt="icon-sosmed" />
                            </li>
                            <li>
                                <img src="/src/assets/images/icon/sosmed/icon-twitch.png" alt="icon-sosmed" />
                            </li>
                        </ul>
                    </div>
                    {/* copyright */}
                    <div className="copyright">
                        <h4>Copyright Binar 2022</h4>
                        <div className="logo" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent;