import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./Modal.module.css"
import Buttons from "../Buttons/Buttons"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ModalPop({ show, handleClose }) {
  const [txtErr, setTxtErr] = useState(false);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    website: ''
  })
  const { firstName, lastName, email, number, website } = data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleFormSubmit = async (e) => {
    
    e.preventDefault(); // Corrected "prevent" to "preventDefault"
    if (firstName != '' && email != '' && number != '') {
      try {
        const res = await fetch('https://v1.nocodeapi.com/primepixelhub/google_sheets/vbBrehfJsVjddVLR?tabId=Sheet1', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json', // Corrected "content-Type" to "Content-Type"
          },
          body: JSON.stringify([[firstName, lastName, email, number, website, new Date().toLocaleString()]])
        });
        await res.json();
        // Clear the form fields if needed
        setData({ firstName: '', lastName: '', email: '', number: '', website: '' });
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
    } else if (firstName == '' && email == '' && number == '') {

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


      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
        style={{ cursor: 'pointer' }}
      >
        <Modal.Header closeButton style={{cursor:'pointer'}}>
          <Modal.Title id="example-modal-sizes-title-lg">
            <div className="container">
              <div className="row ">
                <div className="col-lg-12">
                  <div className={styles.heading}><h3>Get Your Website <span>SEO Audit Now</span>  </h3></div>
                </div>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label for="formGroupExampleInput"><span style={{ color: "red" }}>*</span>First Name</label>
              <input type="text" id="formGroupExampleInput" className="form-control" placeholder="*Enter Your First Name" name='firstName' value={firstName} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} />
            </div>
            <div className="form-group mt-2">
              <label for="formGroupExampleInput">Last Name</label>
              <input type="text" id="formGroupExampleInput2" className="form-control" placeholder="Enter Your Last Name" name='lastName' value={lastName} onChange={handleChange} />
            </div>
            <div className="form-group mt-2">
              <label for="formGroupExampleInput"><span style={{ color: "red" }}>*</span>Email</label>
              <input type="email" id="formGroupExampleInput2" className="form-control" placeholder="*Enter Your Email" name='email' value={email} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} />
            </div>
            <div className="form-group mt-2">
              <label for="formGroupExampleInput"><span style={{ color: "red" }}>*</span>Phone Number</label>
              <input type="number" id="formGroupExampleInput2" className="form-control" placeholder="*Enter Your Phone Number" name='number' value={number} onChange={handleChange} style={{ borderColor: txtErr ? "red" : "" }} />
            </div>
            <div className="form-group mt-2 mb-3">
              <label for="formGroupExampleInput">Website</label>
              <input type="text" id="formGroupExampleInput2" className="form-control" placeholder="Enter Your Website" name='website' value={website} onChange={handleChange} />
            </div>
            <Buttons title={"Submit"} width={"100%"} />
          </form>
        </Modal.Body>
      </Modal>
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
    </>
  );
}

export default ModalPop;