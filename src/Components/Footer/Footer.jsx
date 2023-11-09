import React from 'react'
import "./Footer.css"
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/Images/logo.png"
import { TfiLocationPin } from 'react-icons/tfi'
import { IoIosCall } from 'react-icons/io'
import { BsFillChatRightTextFill } from 'react-icons/bs'
const Footer = () => {

    const navLinkStyle = {
        color: 'white', // Change to the color you prefer
        textDecoration: 'none',
    };


    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row justify-content-between align-items-center ">
                        <div className="col-lg-3">
                            <div className="footer-details">
                                <div className="footer-logo">
                                    <img src={Logo} alt='no-image' width={"150px"} />
                                </div>
                                <div className="footer-text">
                                    <p>Ready to spark your digital triumph? Let's join forces and pioneer creative solutions! Connect with us for outstanding Designing services</p>
                                </div>
                                <div className="socail-content-01">
                                    <ul>
                                        <li><a href="https://www.instagram.com/?hl=en" target='_blank'> <AiOutlineInstagram style={{ fontSize: "25px" }} /></a></li>
                                        <li><a href="https://www.facebook.com/blazeinteractives/" target='_blank'><FaFacebookF style={{ fontSize: "25px" }} /></a></li>
                                        <li><a href="https://www.linkedin.com/company/blaze-interactives/" target='_blank'><AiFillLinkedin style={{ fontSize: "25px" }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="address">
                                        <h1>Mailing Address</h1>
                                        <p> <TfiLocationPin style={{ fontSize: '25px' }} /> 5900 Balcones Drive STE 100 Austin TX 78731</p>
                                    </div>
                                    <div className="address">
                                        <h1>Email</h1>
                                        <p> <a href="tel:+1 (888) 7777"><BsFillChatRightTextFill style={{ fontSize: '25px' }} />  Info@primepixelhub.com </a></p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14483.629572031883!2d67.0735613!3d24.8328404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da6535f5ef1%3A0xc79cddee409e1134!2sBlaze%20Interactives%20Private%20Limited!5e0!3m2!1sen!2s!4v1699562141888!5m2!1sen!2s"
                                        width="100%"
                                        height="450"
                                        style={{ border: '0' }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </footer>

        </>
    )
}

export default Footer