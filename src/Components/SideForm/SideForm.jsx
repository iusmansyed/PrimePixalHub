import React, { useState } from "react";
import styles from "./Style.module.css"
import { BiSolidPhoneCall } from 'react-icons/bi'
import { BsFillChatRightTextFill } from 'react-icons/bs'
import Buttons from "../Buttons/Buttons";

const SideForm = () => {
    const [sectionVisible, setSectionVisible] = useState(false);

    const toggleForm = () => {
        setSectionVisible(!sectionVisible);
    };
    return (
        <>
            <div className={styles.formContainer}>
                <div className={styles.call}>
                    <div className={styles.icon2}>
                        <span>
                            <BiSolidPhoneCall style={{ color: "white", fontSize: "30px" }} />
                        </span>
                    </div>
                    <div className={styles.calltext}>
                        <p>001010010101010101</p>
                    </div>
                </div>
                <div className={styles.chat}>
                    <div className={styles.icon2}>
                        <span>
                            <BsFillChatRightTextFill style={{ color: "white", fontSize: "30px" }} />
                        </span>
                    </div>
                    <div className={styles.calltext}>
                        <p>CHAT WITH US</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.popup_form} ${sectionVisible ? styles.active : ''}`} >
                <div className={styles.text} onClick={toggleForm}><h1>GET YOUR FREE SEO AUDIT</h1></div>
                <div className={styles.form_sec}><div className="container">
                    <h3>Signup And <span>let's get Started</span></h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Email" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Phone Number" />
                        </div>
                        <div className="form-group mt-3 mb-2">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Talk About Your Project " rows="3"></textarea>
                        </div>
                        <Buttons title={"Submit"} width={"100%"}/>
                    </form>
                </div></div>
            </div>
        </>

    )
}

export default SideForm