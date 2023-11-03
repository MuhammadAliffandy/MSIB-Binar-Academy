import '../../style/home.css';

const TestimonialSectionComponent = () => {
    return(
        <>
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
                                    <img src="/static/images/user-image.png" alt="First slide" />
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
                                    <img src="/static/images/user-image.png" alt="two slide" />
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
                                    <img src="/static/images/user-image.png" alt="Third slide" />
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
        </>
    )
}

export default TestimonialSectionComponent;