import React, { useState, useEffect } from 'react'
import styles from "./navbar.module.css"
import { NavLink } from 'react-router-dom'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { BsFillChatRightTextFill } from 'react-icons/bs'
const TopNav = () => {
    const [scrolling, setScrolling] = useState(false)
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
        color: scrolling ? "red" : 'white', // Change to the color you prefer
        textDecoration: 'none',
    };
    const navLinkStyle = {
        color: scrolling ? "black" : 'white', // Change to the color you prefer
        textDecoration: 'none',
    };

    const navbarStyle = {
        backgroundColor: scrolling ? 'white' : 'transparent',
        transition: '0.5s',
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: scrolling ? '5px 5px 10px rgba(0, 0, 0, 0.5)' : ""
    };
    return (
        <nav style={navbarStyle}>
            <div className={styles.header}>
                <div className={styles.logo}><NavLink to={"/"} style={navLinkStyle2}>PRIMEPIXELHUB</NavLink></div>
                <div className={styles.links}>
                    <ul>
                        <li><NavLink to={"/about"} style={navLinkStyle}>About</NavLink></li>
                        <li><NavLink to={"/contact"} style={navLinkStyle}>Contact</NavLink></li>
                        <li><NavLink to={"/services"} style={navLinkStyle}>Services</NavLink></li>
                        <li><NavLink to={"/pricing"} style={navLinkStyle}>Pricing</NavLink></li>
                        <li><BiSolidPhoneCall style={{ color: scrolling ? "black" : "white", fontSize: "24px" }} /></li>
                        <li><BsFillChatRightTextFill style={{ color: scrolling ? "black" : "white", fontSize: "24px" }} /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNav