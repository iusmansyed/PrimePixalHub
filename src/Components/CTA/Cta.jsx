import React, { useState } from 'react'
import styles from "./Cta.module.css"
import Buttons from '../Buttons/Buttons'
import ModalPop from '../Modal/ModalPop'
const Cta = (props) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const divStyle = {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        backgroundSize: 'cover',
        height: '100%',
        backgroundAttachment: 'fixed'
      };
    return (
        <section className={styles.cta}>
            <ModalPop show={showModal} handleClose={closeModal}/>
            <div class={styles.gif_container} style={divStyle}>

                <div class={styles.content}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>{props.heading} <span style={{color:props.spanColor}}>{props.spanHeading}</span></h1>
                                <h3>{props.subHeading}</h3>
                                <h4>{props.text}</h4>
                                <div className={styles.btns}>
                                <a href="tel:+798564312"><Buttons title={"Talk To An Expert"} /></a>
                                    <Buttons title={"Get A Free Quote"} onClick={openModal} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Cta