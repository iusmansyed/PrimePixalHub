import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from "./Modal.module.css"
import Buttons from "../Buttons/Buttons"
function ModalPop({ show, handleClose }) {

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
      >
        <Modal.Header closeButton>
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
          <form>
            <div className="form-group">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Full Name" />
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Address" />
            </div>
            <div className="form-group mt-3">
              <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Number" />
            </div>
            <div className="form-group mt-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Additional Information'></textarea>
            </div>
            <div className={styles.sbmt}>
              <Buttons title={"Submit"} width={"100%"} Color={"black"} textColor={"white"} />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPop;