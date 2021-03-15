import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'

export default function ContactUs() {

  const [userName, setUserName] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  const [userPhone, setUserPhone] = useState([]);
  const [formSuccess, setFormSuccess] = useState(false);

  const serviceID = process.env.REACT_APP_SERVICE_ID
  const templateID = process.env.REACT_APP_TEMPLATE_ID
  const userID = process.env.REACT_APP_USER_ID

  const handleName = (e) => {
    setUserName(e.target.value);
  };
  const handleAddress = (e) => {
    setUserAddress(e.target.value);
  };
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setUserPhone(e.target.value);
  };

  const google = window.google;
  const searchInput = 'propertyAddress';

  // eslint-disable-next-line
  let autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
      types: ['geocode'],
      componentRestrictions: {country: "USA"}
  });

  function sendEmail(e) {
    e.preventDefault();
    if (userName.length > 0 && userAddress.length > 0 && userEmail.length > 0 && userPhone.length > 0){
      emailjs.sendForm(serviceID, templateID, e.target, userID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
      setFormSuccess(true);
    }else {
      alert('All fields are required.')
    }
  }

  const renderSuccess = () => {
    if(formSuccess) {
      return <div>Request Sent! <span role="img" aria-label="green check mark">✅</span></div>
    } else {
      return <div>Get My Quote <span role="img" aria-label="money bag">🏠</span></div>
    }
  }

  return (
    <div>
    <form className="contact-form dark" noValidate onSubmit={sendEmail} >
      <TextField name="user_name" label="Name" variant="filled" className="input" error={!userName} helperText={userName ? "" : "Please provide your name."} onChange={handleName} style={{fontFamily: "'Quicksand','sans-serif"}} /><br></br>
      <TextField name="user_address" label="Property Address" variant="filled" id="propertyAddress" className="input" error={!userAddress} helperText={userAddress ? "" : "Please provide the property address."} onChange={handleAddress} /><br></br>
      <TextField name="user_phone" label="Phone Number" variant="filled" className="input" error={!userPhone} helperText={userPhone ? "" : "Please provide your phone number."} onChange={handlePhone}/><br></br>
      <TextField name="user_email" label="Email" variant="filled" className="input" error={!userEmail} helperText={userEmail ? "" : "Please provide your email address."} onChange={handleEmail}/><br></br>
      {/* <TextField name="user_message" label="Message (Optional)" variant="filled" className="input" multiline /><br></br><br></br> */}
      <Button variant="contained" color="secondary" style={{fontSize:25, color:'white', fontFamily:"'Quicksand','sans-serif'", fontWeight: '700'}} type="submit" value="Send" disabled={formSuccess} >{renderSuccess()}</Button><br></br>
    </form>
    </div>
  );
}