import React from 'react'
import styles from "./Cta.module.css"
import Buttons from '../Buttons/Buttons'
import Building from "../../assets/Images/building.gif"
const Cta = () => {
    return (
        <section className={styles.cta}>
            <div class={styles.gif_container}>

                <div class={styles.content}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1>Highly Reliable SEO Agency Just a Click Away</h1>
                                <h3>There’s an incredible range of custom SEO solutions you can cherry-pick. We have futuristic SEO technologies to help organizations blast off to infinite success.</h3>
                                <div className={styles.btns}>
                                    <Buttons title={"Talk To An Expert"} />
                                    <Buttons title={"+1 888 307 2403"}/>
                                    <Buttons title={"Get A Free Quote"}/>
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