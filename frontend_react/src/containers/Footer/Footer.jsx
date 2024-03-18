import React from 'react'
import './Footer.scss';
import {useState} from 'react';
import {client} from '../../client';
import {images} from '../../constants';
import { AppWrap,MotionWrap} from '../../Wrapper'

const Footer = () => {

  const [formSubmit, setFormSubmit] = useState(false);
  const [formdata, setFormdata] = useState({username:'',email:'',message:''});
  const [loading,setLoading] = useState(false);

  const {username, email, message} = formdata; 

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormdata({...formdata, [name]: value})
  }

  const handleSubmit=()=>{
    setLoading(true);

    const creating_contact={
      _type:'contact',
      name:formdata.name,
      email:formdata.email,
      message:formdata.message
    }

    client.create(creating_contact).then(()=>{
      setLoading(false);
      setFormSubmit(true);
    }).catch((err)=>{
      console.log("Error "+err)});
  }

  return (
    <div className='app__wrapper-footer'>
      <h1>Take A Coffee & Chat With Me</h1>

      <div className='app__footer-contact'>
        <div className='app__contact-email'>
          <img src={images.email} alt="email"/>
          <p>monisazeem@gmail.com</p>
        </div>
        <div className='app__contact-phone'>
          <img src={images.mobile} alt="mobile" />
          <p>+91</p>
        </div>
      </div>

      {!formSubmit?(
      <div className='app__footer-form'>
        <input type="text" placeholder='Your Name' name="username" value={username} onChange={handleChangeInput}/>
        <input type="text" placeholder='Your Email' name="email" value={email} onChange={handleChangeInput}/>
        <textarea placeholder='Your Message' name="message" value={message} onChange={handleChangeInput}/>
        <button onClick={handleSubmit}>{!loading?"Send Message":"Sending..."}</button>
      </div>)
      :(
      <div className='app__footer-formSubmit'>
        <h1>Thank You For Getting In Touch!</h1>
        </div>
        )}
    </div>
  )
}

export default AppWrap(MotionWrap(Footer,'app__footer'),'contact');