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
                                        <li><a href="https://instagram.com/primepixelhub?igshid=YTQwZjQ0NmI0OA==" target='_blank'> <AiOutlineInstagram style={{ fontSize: "25px" }} /></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61553650501265" target='_blank'><FaFacebookF style={{ fontSize: "25px" }} /></a></li>
                                        <li><a href="https://www.linkedin.com/company/prime-pixel-hub/about/" target='_blank'><AiFillLinkedin style={{ fontSize: "25px" }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 ">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-4">
                                    <div className="address">
                                        <h1>Mailing Address</h1>
                                        <p> <TfiLocationPin style={{ fontSize: '25px' }} /> 5900 Balcones Drive STE 100 Austin TX 78731</p>
                                    </div>
                                    <div className="address">
                                        <h1>Email</h1>
                                        <p> <BsFillChatRightTextFill style={{ fontSize: '25px' }} />  Info@primepixelhub.com </p>
                                    </div>
                                    <div className="address">
                                        <h1>Email</h1>
                                        <p> <a href="tel:+14097976147"><IoIosCall style={{ fontSize: '25px' }} />  +14097976147 </a></p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.330227978854!2d-97.75752952379061!3d30.341563504431143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cae2f96fffff%3A0xeb7209fa2a453ee9!2s5900%20Balcones%20Dr%20Suite%20100%2C%20Austin%2C%20TX%2078731%2C%20USA!5e0!3m2!1sen!2s!4v1699658535305!5m2!1sen!2s"
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