import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import './SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className='app__socials'>
        <div className='social'><BsTwitter/></div>
        <div className='social'><FaFacebookF/></div>
        <div className='social'><BsInstagram/></div>
    </div>
  )
}

export default SocialMedia