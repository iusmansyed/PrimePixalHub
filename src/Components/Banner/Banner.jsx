import React, { useState } from 'react'
import styles from "./Banner.module.css"

import ModalPop from '../../Components/Modal/ModalPop'
import Buttons from '../Buttons/Buttons'
import { Dropdown } from 'bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Banner = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [txtErr, setTxtErr] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    number: '',
    selectedOption: ''
  })

  const { name, email, number, selectedOption } = data
  const [selectedValue, setSelectedValue] = useState('');
  const options = ['Website Designing & Development', ' Logo Designing', '2D / 3D Animation', 'Social Media Marketing & Management ', 'SEO Writing', 'Digital Marketing'];

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault(); 
    if (name != '' && email != '' && number != '') {
      try {
        const res = await fetch('https://v1.nocodeapi.com/primepixelhub/google_sheets/vbBrehfJsVjddVLR?tabId=Sheet1', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify([[name, email, number, selectedOption, new Date().toLocaleString()]])
        });
        await res.json();
        // Clear the form fields if needed
        setData({ name: '', email: '', number: '' });
        toast.success('Successfully Submitted', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        console.log(error, "form error");
      }
    } else if (name == '' && email == '' && number == '') {

      setTxtErr(true)
      toast.info(`Kindly Fill Mandatory Fields`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    }
    else {
      toast.error('Submission Failed', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  };
  return (
    <section className={styles.home}>
      <div className={styles.banner_video}>
        <video className={styles.Video} autoPlay={true} loop={true} muted={true}>
          <source src={props.video} type="video/mp4" />

        </video>
        <div className={styles.content}>
          <div className='container'>
            <div className="row">
              <div className={props.columns} data-aos="fade-up">
                <div className={styles.bannerHeading}>
                  <h1>{props.heading}<span>{props.spanText}</span></h1>
                  <h3>{props.subHeading}</h3>
                  <p>{props.para}</p>
                  <div className={styles.btns} style={{display:props.btns}}>
                    <a href="tel:+798564312"><Buttons title={"Contact Us"} border={'1px solid red'} /></a>
                    <Buttons title={"Get A Qoute"} onClick={openModal} border={'1px solid red'} />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 " style={{ display: props.formDisplay }}>
                <ModalPop show={showModal} handleClose={closeModal} />
                <div className={styles.formSec} data-aos="fade-down" data-aos-duration="1500" >
                  <h1>Rank Up</h1>
                  <h3>With <span>PrimePixelHub</span></h3>
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label for="formGroupExampleInput"><span style={{ color: "red" }}>*</span>Name</label>
                      <input type="text" id="formGroupExampleInput" placeholder="*Enter Your Name" name='name' value={name} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} />
                    </div>
                    <div className="form-group mt-2">
                      <label for="formGroupExampleInput"><span style={{ color: "red" }}>*</span>Email</label>
                      <input type="email" id="formGroupExampleInput2" placeholder="*Enter Your Email" name='email' value={email} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} />
                    </div>
                    <div className="form-group mt-2">
                      <label for="formGroupExampleInput"><span style={{ color: "red" }}>*</span>Phone Number</label>
                      <input type="number" id="formGroupExampleInput2" placeholder="*Enter Your Phone Number" name='number' value={number} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} maxLength="10" />
                    </div>
                    <div className={styles.Dropdown}>
                      <label for="formGroupExampleInput" style={{ color: 'white' }}><span style={{ color: "red" }}>*</span>Select The Desire Field</label>
                      <select name="selectedOption" value={data.selectedOption} onChange={handleChange}>
                        <option value="">Select The Desire Field</option>
                        {options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Buttons title={"Submit"} width={"100%"} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  )
}

export default Banner