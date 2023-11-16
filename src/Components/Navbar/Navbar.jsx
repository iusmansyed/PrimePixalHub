import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { BsFillChatRightTextFill } from 'react-icons/bs';
import Buttons from '../Buttons/Buttons';
import Logo from '../../assets/Images/logo.png';
import Logo2 from '../../assets/Images/logo-2.png';
import { AiFillCaretDown, AiFillCaretUp, AiOutlineMenu } from 'react-icons/ai';
import ModalPop from '../Modal/ModalPop';

const TopNav = () => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkStyle2 = {
    color: 'white',
    textDecoration: 'none',
  };

  const navLinkStyle3 = {
    color: scrolling ? 'black' : 'white',
    textDecoration: 'none',
  };

  const navLinkStyle = {
    color: scrolling ? 'black' : 'white',
    textDecoration: 'none',
  };

  const navbarStyle = {
    backgroundColor: scrolling ? 'white' : 'rgba(0, 0, 0, 0.452)',
    transition: '0.5s',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 99, // Adjust the z-index value
    boxShadow: scrolling ? '5px 5px 10px rgba(0, 0, 0, 0.5)' : 'none',
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    display: dropdownVisible ? 'block' : 'none',
    transition: 'opacity 0.3s ease-in-out',
    opacity: dropdownVisible ? 1 : 0,
    backgroundColor: scrolling ? 'white' : 'black',
    padding: '0 10px',
    border: 'none',
    width: '350px',
  };

  const dropdownStyle2 = {
    display: dropdownVisible ? 'block' : 'none',
    transition: 'opacity 0.3s ease-in-out',
    opacity: dropdownVisible ? 1 : 0,
    backgroundColor: scrolling ? 'white' : 'black',
    padding: '0 10px',
    border: 'none',
    marginTop:0,
    overflow:"scroll",
    listStyle:'dotted' 
  };
  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <ModalPop show={showModal} handleClose={closeModal} />
      <div style={navbarStyle} className={styles.mainDiv}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <NavLink to={'/'}>
              {scrolling ? (
                <img src={Logo2} alt="" width={'85px'} className={styles.logo2} />
              ) : (
                <img src={Logo} alt="" width={'100px'} className={styles.logo1} />
              )}
            </NavLink>
          </div>
          <div className={styles.links}>
            <ul>
              <li
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                <div className={styles.subLinks}>
                  <div  style={navLinkStyle}>
                    Services {dropdownVisible ?<AiFillCaretDown /> :<AiFillCaretUp />}
                  </div>
                  <ul style={dropdownStyle}>
                    <li>
                      <NavLink to="/WebsiteDesignDevelop" style={navLinkStyle3}>
                        Website Designing & Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/LogoDesigns" style={navLinkStyle3}>
                        Logo Designing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Animation" style={navLinkStyle3}>
                      2D/3D Animation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/SocialMedia" style={navLinkStyle3}>
                        Social Media Marketing & Management 
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/SeoWriting" style={navLinkStyle3}>
                        SEO Writing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/DigitalMarketing" style={navLinkStyle3}>
                        Digital Marketing
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink to={'/work'} style={navLinkStyle}>
                  How We Work
                </NavLink>
              </li>
              <li>
                <NavLink to={'/packages'} style={navLinkStyle}>
                  Packages
                </NavLink>
              </li>
              <li>
                <NavLink to={'/portfolio'} style={navLinkStyle}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <a href="tel:+798564312">
                  <BiSolidPhoneCall
                    style={{ color: scrolling ? 'black' : 'red', fontSize: '24px' }}
                  />
                </a>
              </li>
              <li>
                <Buttons
                  title={'Get Started'}
                  Color={'transparent'}
                  textColor={scrolling ? 'black' : 'white'}
                  onClick={openModal}
                />
              </li>
            </ul>
          </div>
          <div className={styles.links2}>
            <div className={styles.menu} onClick={() => setMenu(!menu)}>
              <AiOutlineMenu className="" style={{ fontSize: '25px', color: 'red' }} />
            </div>
            <div
              className={styles.menuLink}
              style={{
                height: menu ? '190vh' : '0px',
                overflow: 'hidden',
                opacity: menu ? 1 : 0,
                transition: 'height 1s, opacity 1s',
              }}
            >
              <ul>
              <li onClick={handleDropdownToggle}>
                <div className={styles.subLinks}>
                  <NavLink to="/services" style={navLinkStyle}>
                    Services
                  </NavLink>
                </div>
              </li>
              <ul style={dropdownStyle2}>
                    <li>
                      <NavLink to="/WebsiteDesignDevelop" style={navLinkStyle3}>
                        Website Designing & Development
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/LogoDesigns" style={navLinkStyle3}>
                        Logo Designing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Animation" style={navLinkStyle3}>
                        Animation 2D, 3D
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/SocialMedia" style={navLinkStyle3}>
                        Social Media Management & Marketing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/SeoWriting" style={navLinkStyle3}>
                        SEO Writing
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/DigitalMarketing" style={navLinkStyle3}>
                        Digital Marketing
                      </NavLink>
                    </li>
                  </ul>
                <li>
                  <NavLink to={'/work'} style={navLinkStyle2}>
                    How We Work
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/packages'} style={navLinkStyle2}>
                    Packages
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/portfolio'} style={navLinkStyle2}>
                    Portfolio
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
