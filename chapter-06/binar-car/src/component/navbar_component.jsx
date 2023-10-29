import '../style/home.css';

const NavbarComponent = () => {
    return (
        <>
            <nav className="header-nav navbar navbar-expand-lg sticky-top " id="navbar">
                <div className="logo navbar-brand" />
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarControls"
                    aria-controls="navbarControls">
                    <i className="fa-solid fa-bars" />
                </button>
                <div className="offcanvas offcanvas-end" data-bs-hideresize="true" tabIndex={-1} id="navbarControls"
                    aria-labelledby="navbarControls">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasLabel">
                            BCR
                        </h5>
                        <i type="button" className="fa-solid fa-xmark" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                        <div className="me-auto" />
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link activ" href="#our-service">
                                    Our Service
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link activ" href="#why-us">
                                    Why Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link activ" href="#testimonial">
                                    Testimonial
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link activ" href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-success" type="submit">
                                    Register
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarComponent;