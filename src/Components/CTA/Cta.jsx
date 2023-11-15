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
                                <h1>Logos with Impact, <span>Websites</span> with Wow</h1>
                                <h3>We breathe life into design. From eye-catching logos that embody your brand's essence to websites that leave a lasting digital footprint, we're your creative partners. Our passion lies in transforming ideas into visually stunning realities.</h3>
                                <h4>– let's build something extraordinary together!</h4>
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