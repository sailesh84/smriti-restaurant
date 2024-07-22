import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ak-site_header ak-style1 ak-sticky_header ak-site_header_full_width">
        <div className="header-top">
            <div className="wrapper">
                <div className="header-logo">
                    <a href="reservations.html" className="logo">Reservation</a>
                </div>
                <div className="center-log">
                    <a href="index.html"><img src="assets/img/logo.png" alt="..." /></a>
                </div>
                <button className="ak-menu-toggle" id="akMenuToggle" type="button">
                    <svg viewBox="0 0 20 15" width="40px" height="30px" className="ak-menu-icon">
                        <path d="M20,2 L2,2" className="bar-1"></path>
                        <path d="M2,7 L20,7" className="bar-2"></path>
                        <path d="M30,12 L2,12" className="bar-3"></path>
                    </svg>
                </button>
                <ul className="top-main-menu">
                    <li className="top-main-menu-li">
                        <a href="index.html">Home</a>
                        <img className="top-main-menu-img" src="assets/img/fullWM_1.jpg" alt="..." />
                    </li>
                    <li className="top-main-menu-li">
                        <a href="about.html">About</a>
                        <img className="top-main-menu-img" src="assets/img/fullWM_about.jpg" alt="..." />
                    </li>
                    <li className="top-main-menu-li">
                        <a href="menu.html">Menu</a>
                        <img className="top-main-menu-img menu-img" src="assets/img/fullWM_menu.jpg" alt="..." />
                    </li>
                    <li className="top-main-menu-li">
                        <a href="chef.html">Chef</a>
                        <img className="top-main-menu-img" src="assets/img/fullWM_chef.jpg" alt="..." />
                    </li>
                    <li className="top-main-menu-li">
                        <a href="contact.html">Contact</a>
                        <img className="top-main-menu-img" src="assets/img/fullWM_contact.jpg" alt="..." />
                    </li>
                </ul>
            </div>
        </div>
        <div className="nav-bar-border"></div>
        <div className="ak-main_header">
            <div className="container">
                <div className="ak-main_header_in">
                    <div className="ak-main_header_left">
                        <a className="ak-site_branding" href="index.html">
                            <img src="assets/img/logo.png" alt="..." />
                        </a>
                    </div>
                    <div className="ak-main_header_right">
                        <div className="ak-nav ak-medium">
                            <ul className="ak-nav_list">
                                <li className="menu-item-has-children">
                                <Link to="/home">Home</Link>
                                                                
                                        <li><Link to="/home">Home</Link></li>                                                                              
                                   
                                </li>                               
                                <li><Link to="/about">About</Link></li>                              
                                <li>
                                    <a href="menu.html">Menu</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="chef.html">Chef</a>
                                    <ul>
                                        <li>
                                            <a href="chef.html">Chef</a>
                                        </li>
                                        <li>
                                            <a href="meet-the-chef.html">Meet The Chef</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="portfolio.html">Portfolio</a>
                                    <ul>
                                        <li>
                                            <a href="portfolio.html">Portfolio</a>
                                        </li>
                                        <li>
                                            <a href="portfolio-details.html">Portfolio Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="blog.html">Blog</a>
                                    <ul>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="blog-details.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Pages</a>
                                    <ul>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li>
                                            <a href="reservations.html">Reservations</a>
                                        </li>
                                        <li>
                                            <a href="gallery.html">Gallery</a>
                                        </li>


                                        <li>
                                            <a href="404.html">404 Page</a>
                                        </li>
                                        <li>
                                            <a href="comming.html">Comming Soon</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </header>

  );
}
