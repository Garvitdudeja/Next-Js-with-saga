import Image from 'next/image';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ThankuCard({show, handleClose}) {
  

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}

      <Modal
      className='thankuModal'
        show={show}
        onHide={handleClose}
        // backdrop="static"
        keyboard={false}
        centered
        size="md"
      >
        
        <Modal.Body className='flex-column item_center '>
         <Image className='img-fluid mb-3' src="./images/thanku.svg" alt="thanku" width={120} height={120} />
         <h2 className='thanku_heading'>Thankyou !</h2>
         <p className='masterContent'>Your Details has been successfully submitted</p>
         <button onClick={handleClose} className="login_btn mt-2 mt-lg-3 py-[19px]">OK</button>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default ThankuCard;