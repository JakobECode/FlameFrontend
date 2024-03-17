import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
    <div className="contact-container">
      <div className="contact-icon" onClick={handleToggle}>
      <i class="fa-regular fa-bars"></i>
      </div>
      {isOpen && (
        <div className="contact-side-menu">
          <div className='contact-grid'>
            <div className='grid-title-icon'><i className="fa-regular fa-horizontal-rule fa-rotate-90" onClick={handleClose}></i></div>
            <div className='grid-title-text'>Contact us</div>
            <div className='grid-address-icon'><i className="fa-regular fa-location-dot"></i></div>
            <div className='grid-address-text'>Tomtebodavägen 3A,<br/>171 65, Solna, Sweden</div>
            <div className='contact-border-address'></div>
            <div className='grid-mail-icon'><a href='mailto:manero@zynad.se'><i className="fa-regular fa-envelope"></i></a></div>
            <div className='grid-mail-text'>Flame@gmail.se<br/>Flamesupport@gmail.se</div>
            <div className='contact-border-mail'></div>
            <div className='grid-phone-icon'><i className="fa-regular fa-phone-volume"></i></div>
            <div className='grid-phone-text'>08-1234567<br/>08-8933444</div>
            <div className='contact-border-phone'></div>
            <div className='contact-track-title'>Track your order</div>
              <div className='contact-track-input'>
                <div className='col-lg-12 input-wrapper'>
                  <label>ORDER NUMBER</label>
                  <div className='buttonIn'>
                    <input></input>
                    <button className='contact-track-button'><i class="fa-solid fa-arrow-right"></i></button>
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Contact;