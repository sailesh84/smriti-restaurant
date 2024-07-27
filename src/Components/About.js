import React from 'react';


export default function About() {
  return (
    <section className="ak-about-bg-color">
    <div className="ak-height-150 ak-height-lg-60"></div>
    <div className="ak-about ak-style-1">
        <div className="ak-about-bg-img ak-bg">
            <img className="imagesZoom" src={require("../assets/img/about_bg.jpg")} alt="..." />
        </div>
        <div className="ak-about-hr"></div>
        <div className="container">
            <div className="about-section ak-about-1">
                <div className="about-text-section">
                    <h2 className="about-title">Exquisite Dining Experience Fit for
                        <br /><span className="anim-title-2">Royalty</span>
                    </h2>
                    <div className="ak-height-30 ak-height-lg-30"></div>
                    <p className="about-subtext">Welcome to our restaurant, where culinary artistry meets
                        exceptional dining experiences. At, we strive to create a gastronomic haven that
                        tantalizes your taste buds and leaves you with unforgettable memories.
                    </p>
                    <div className="ak-height-30 ak-height-lg-30"></div>
                    <p className="about-subtext">Lorem to our restaurant, where culinary artistry meets exceptional
                        dining experiences. At, we strive to create a gastronomic haven that.
                    </p>
                    <div className="ak-height-50 ak-height-lg-30"></div>
                    <div className="text-btn">
                        <a href="about.html" className="text-btn1">
                            Discover The Kitchen
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>,
<section className="container">
            <div className="ak-height-150 ak-height-lg-60"></div>
            <div className="ak-slider ak-slider-3">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="container">
                            <div className="testimonial-section">
                                <div className="testimonial-icon-1">
                                    <img src={require("../assets/img/testimonial_icon_l.svg")} alt="..." />
                                </div>
                                <div className="testimonial-info-section">
                                    <div className="testimonial-info">
                                        <img src={require("../assets/img/testimonial_1.jpg")} class="testimonial-info-img" alt="..." />
                                        <h6 className="testimonial-info-title">Steven K. Roberts</h6>
                                        <p className="short-title">From USA</p>
                                        <p className="testimonial-info-subtitle">“Their talented team of passionate chefs
                                            masterfully crafts each dish, combining the finest ingredients with
                                            innovative techniques to present culinary creations that are as visually
                                            stunning as they are delicious.”</p>
                                    </div>
                                </div>
                                <div className="testimonial-icon-1">
                                    <img src={require("../assets/img/testimonial_icon_r.svg")} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="container">
                            <div className="testimonial-section">
                                <div className="testimonial-icon-1">
                                    <img src={require("../assets/img/testimonial_icon_l.svg")} alt="..." />
                                </div>
                                <div className="testimonial-info-section">
                                    <div className="testimonial-info">
                                        <img src={require("../assets/img/testimonial_1.jpg")} class="testimonial-info-img" alt="..." />
                                        <h6 className="testimonial-info-title">Steven K. Roberts</h6>
                                        <p className="short-title">From USA</p>
                                        <p className="testimonial-info-subtitle">“Their talented team of passionate chefs
                                            masterfully crafts each dish, combining the finest ingredients with
                                            innovative techniques to present culinary creations that are as visually
                                            stunning as they are delicious.”</p>
                                    </div>
                                </div>
                                <div className="testimonial-icon-1">
                                    <img src={require("../assets/img/testimonial_icon_r.svg")} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="container">
                            <div className="testimonial-section">
                                <div className="testimonial-icon-1">
                                    <img src={require("../assets/img/testimonial_icon_l.svg")} alt="..." />
                                </div>
                                <div className="testimonial-info-section">
                                    <div className="testimonial-info">
                                        <img src={require("../assets/img/testimonial_1.jpg")} className="testimonial-info-img" alt="..." />
                                        <h6 className="testimonial-info-title">Steven K. Roberts</h6>
                                        <p className="short-title">From USA</p>
                                        <p className="testimonial-info-subtitle">“Their talented team of passionate chefs
                                            masterfully crafts each dish, combining the finest ingredients with
                                            innovative techniques to present culinary creations that are as visually
                                            stunning as they are delicious.”</p>
                                    </div>
                                </div>
                                <div className="testimonial-icon-1">
                                    <img src={require("../assets/img/testimonial_icon_r.svg")} alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="ak-swiper-controll-3">
                    <div className="ak-swiper-navigation-wrap">
                        <div className="ak-swiper-button-prev-3">
                            <button className="btn-style-2 btn-size btn-style-round button-prev-next-2 rotate-svg"
                                aria-disabled="false">
                                <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="#fff" fill="none" fill-rule="evenodd">
                                        <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                                    </g>
                                </svg>
                                <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="#fff" fill="none" fill-rule="evenodd">
                                        <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                                    </g>
                                </svg>
                            </button>

                        </div>
                        <div className="ak-swiper-button-next-3">
                            <button className="btn-style-2 btn-size btn-style-round button-prev-next-2"
                                aria-disabled="false">
                                <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="#fff" fill="none" fill-rule="evenodd">
                                        <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                                    </g>
                                </svg>
                                <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="#fff" fill="none" fill-rule="evenodd">
                                        <path d="M12.743 1.343L18.4 7l-5.657 5.657M18.4 7H.4"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}
