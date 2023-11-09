import React, { useState, useEffect } from 'react'
import styles from "./navbar.module.css"
import { NavLink } from 'react-router-dom'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { BsFillChatRightTextFill } from 'react-icons/bs'
import Buttons from '../Buttons/Buttons'
import Logo from "../../assets/Images/logo.png"
import Logo2 from "../../assets/Images/logo-2.png"
import { AiOutlineMenu } from 'react-icons/ai'
import ModalPop from '../Modal/ModalPop'
const TopNav = () => {
    const [menu, setMenu] = useState(false)
    const [scrolling, setScrolling] = useState(false)
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolling(true);
            } else {
                setScrolling(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return (
            window.addEventListener('scroll', handleScroll)

        )
    }, [])
    const navLinkStyle2 = {
        color: 'white', // Change to the color you prefer
        textDecoration: 'none',
    };
    const navLinkStyle = {
        color: scrolling ? "black" : 'white', // Change to the color you prefer
        textDecoration: 'none',
    };

    const navbarStyle = {
        backgroundColor: scrolling ? 'white' : 'rgba(0, 0, 0, 0.452)',
        transition: '0.5s',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: scrolling ? '5px 5px 10px rgba(0, 0, 0, 0.5)' : 'none',
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <ModalPop show={showModal} handleClose={closeModal} />
            <div style={navbarStyle} className={styles.mainDiv}>
                <div className={styles.header}>
                    <div className={styles.logo}><NavLink to={"/"} > {scrolling ? <img src={Logo2} alt="" width={"85px"} className={styles.logo2} /> : <img src={Logo} alt="" width={"100px"} className={styles.logo1} />} </NavLink></div>
                    <div className={styles.links}>
                        <ul>
                            <li><NavLink to={"/about"} style={navLinkStyle}>About</NavLink></li>
                            <li><NavLink to={"/contact"} style={navLinkStyle}>Contact</NavLink></li>
                            <li><NavLink to={"/services"} style={navLinkStyle}>Services</NavLink></li>
                            <li><NavLink to={"/pricing"} style={navLinkStyle}>Pricing</NavLink></li>
                            <li><a href="tel:+798564312"><BiSolidPhoneCall style={{ color: scrolling ? "black" : "red", fontSize: "24px" }} /></a></li>
                            <li><BsFillChatRightTextFill style={{ color: scrolling ? "black" : "red", fontSize: "24px" }} /></li>
                            <li><Buttons title={"Get Started"} Color={"transparent"} textColor={scrolling ? "black" : "white"} onClick={openModal} /></li>
                        </ul>
                    </div>
                    <div className={styles.links2}>
                        <div className={styles.menu} onClick={() => setMenu(!menu)}>
                            <AiOutlineMenu className='' style={{ fontSize: "25px", color: "red" }} />
                        </div>
                        <div className={styles.menuLink} style={{ height: menu ? "60vh" : "0px", overflow: "hidden", opacity: menu ? 1 : 0, transition: "1s" }}>
                            <ul>
                                <li><NavLink to={"/about"} style={navLinkStyle2}>About</NavLink></li>
                                <li><NavLink to={"/contact"} style={navLinkStyle2}>Contact</NavLink></li>
                                <li><NavLink to={"/services"} style={navLinkStyle2}>Services</NavLink></li>
                                <li><NavLink to={"/pricing"} style={navLinkStyle2}>Pricing</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopNav