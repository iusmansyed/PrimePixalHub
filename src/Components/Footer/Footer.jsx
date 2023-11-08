import React from 'react'
import "./Footer.css"
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Logo from "../../assets/Images/logo.png"
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
                                    <p>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class </p>
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
                            <div className="row">
                                <div className="col">
                                <div className="links">
                                        <h1><NavLink to={"/about"} style={navLinkStyle}>About</NavLink></h1>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                    </div>
                                </div>
                                <div className="col">
                                <div className="links">
                                        <h1><NavLink to={"/contact"} style={navLinkStyle}>Contact</NavLink></h1>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                    </div>
                                </div>
                                <div className="col">
                                <div className="links">
                                        <h1><NavLink to={"/services"} style={navLinkStyle}>Services</NavLink></h1>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="links">
                                        <h1><NavLink to={"/pricing"} style={navLinkStyle}>Pricing</NavLink></h1>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                        <p>example</p>
                                    </div>
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