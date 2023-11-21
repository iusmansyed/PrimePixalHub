import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styles from "./Modal.module.css"; // Import your CSS file
import Buttons from "../Buttons/Buttons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedCursor from 'react-animated-cursor';
import CustomModal from '../CustomModal/CustomModal';

function ModalPop({ show, handleClose }) {

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
  if (show == true) {
    document.body.style.overflow = 'hidden';
  }else{
    document.body.style.overflow = 'auto';
  }
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Corrected "prevent" to "preventDefault"
    if (name != '' && email != '' && number != '' && selectedOption != '') {
      try {
        const res = await fetch('https://v1.nocodeapi.com/prime_pixel_hub/google_sheets/OWtqTpppCvNZTSgi?tabId=Sheet1', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json', // Corrected "content-Type" to "Content-Type"
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
    } else if (name == '' && email == '' && number == '' && selectedOption == '') {

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
    <>
      <div className={styles.modalDiv} style={{ display: show ? 'block' : 'none' }} >
        <div className={styles.ModalContainer} onClose={handleClose}>
          <div className={styles.TxtHeading}><h3>Get Your Website <span>SEO Audit Now</span></h3> </div>
          <p className={styles.heading} onClick={handleClose}>x</p>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label for="formGroupExampleInput" style={{ color: 'white' }}><span style={{ color: "red" }}>*</span>Name</label>
              <input type="text" id="formGroupExampleInput" placeholder="*Enter Your Name" name='name' value={name} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} />
            </div>
            <div className="form-group mt-2">
              <label for="formGroupExampleInput" style={{ color: 'white' }}><span style={{ color: "red" }}>*</span>Email</label>
              <input type="email" id="formGroupExampleInput2" placeholder="*Enter Your Email" name='email' value={email} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} />
            </div>
            <div className="form-group mt-2">
              <label for="formGroupExampleInput" style={{ color: 'white' }}><span style={{ color: "red" }}>*</span>Phone Number</label>
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

    </>
  );
}

export default ModalPop;
