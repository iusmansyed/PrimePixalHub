import React from 'react'
import "./Footer.css"
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    
    const navLinkStyle = {
        color: 'white', // Change to the color you prefer
        textDecoration: 'none',
    };

   
    return (
        <>
            <footer>
                <div className="container-fluid">
                    <div className="row align-items-center  ">
                        <div className="col-lg-4 ">
                            <div className="footer-heading">
                                <h1>PRIMEPIXELHUB</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="socail-content">
                                <ul>
                                    <li><NavLink to={"/about"} style={navLinkStyle}>About</NavLink></li>
                                    <li><NavLink to={"/contact"} style={navLinkStyle}>Contact</NavLink></li>
                                    <li><NavLink to={"/services"} style={navLinkStyle}>Services</NavLink></li>
                                    <li><NavLink to={"/pricing"} style={navLinkStyle}>Pricing</NavLink></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="socail-content">
                                <ul>
                                    <li><a href="https://www.instagram.com/?hl=en" target='_blank'> <AiOutlineInstagram style={{ fontSize: "25px" }} /></a></li>
                                    <li><a href="https://www.facebook.com/blazeinteractives/" target='_blank'><FaFacebookF style={{ fontSize: "25px" }} /></a></li>
                                    <li><a href="https://www.linkedin.com/company/blaze-interactives/" target='_blank'><AiFillLinkedin style={{ fontSize: "25px" }} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>

        </>
    )
}

export default Footer