import React, { useState } from 'react'
import styles from "./Cta.module.css"
import Buttons from '../Buttons/Buttons'
import ModalPop from '../Modal/ModalPop'
const Cta = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <section className={styles.cta}>
            <ModalPop show={showModal} handleClose={closeModal}/>
            <div class={styles.gif_container}>

                <div class={styles.content}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Dive into Animation Magic - Your Creative Journey Begins</h1>
                                <h3>Welcome to the enthralling world of animation, where the possibilities are endless. We specialize in both 2D and 3D animation at our company, with each giving a distinct and engaging experience.</h3>
                                <div className={styles.btns}>
                                    <Buttons title={"Talk To An Expert"} />
                                    <a href="tel:+798564312"><Buttons title={"+1 798 645 312"} /></a>
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