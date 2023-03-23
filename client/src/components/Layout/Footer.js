import React from "react";
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.css"
const Footer = () => {
    return (

        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><Link to="/about">about us</Link></li>
                            <li><Link to="#">our services</Link></li>
                            <li><Link to="/policy">privacy policy</Link></li>
                            <li><Link to="#">affiliate program</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><Link to="#">FAQ</Link></li>
                            <li><Link to="#">shipping</Link></li>
                            <li><Link to="#">returns</Link></li>
                            <li><Link to="/dashboard/user/orders">order status</Link></li>
                            <li><Link to="#">payment options</Link></li>
                        </ul>
                    </div>
                    {/* <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><Link to="#">watch</Link></li>
                            <li><Link to="#">bag</Link></li>
                            <li><Link to="#">shoes</Link></li>
                            <li><Link to="#">dress</Link></li>
                        </ul>
                    </div> */}
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <Link to="#"><i className="fab fa-facebook-f" /> <AiFillFacebook></AiFillFacebook></Link>
                            <Link to="#"><i className="fab fa-twitter" /><AiOutlineInstagram></AiOutlineInstagram></Link>
                            <Link to="#"><i className="fab fa-instagram" /><AiOutlineWhatsApp></AiOutlineWhatsApp></Link>
                            <Link to="#"><i className="fab fa-linkedin-in" /><AiFillTwitterCircle></AiFillTwitterCircle></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
