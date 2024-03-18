import React from 'react'
import { FaGithub } from "react-icons/fa";
import {BsTwitter} from 'react-icons/bs';
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";
import { SiHashnode } from "react-icons/si";

import './SocialMedia.scss'

const SocialMedia = () => {
  return (
    <div className='app__socials app__flex'>
        <a href="https://github.com/monis07" target="_blank"><div className='social'><FaGithub/></div></a>
        <a href="https://www.linkedin.com/in/monisazeem/" target="_blank"><div className='social'><FaLinkedin/></div></a>
        <a href="https://twitter.com/MonisAzeem" target="_blank"><div className='social'><BsTwitter/></div></a>
        {/* <a href="https://leetcode.com/monisazeem/" target="_blank"><div className='social'><SiLeetcode/></div></a>
        <a href="https://www.codingninjas.com/studio/profile/monis07" target="_blank"><div className='social'><SiCodingninjas/></div></a>
        <a href="https://monisazeem.hashnode.dev/" target="_blank"><div className='social'><SiHashnode/></div></a> */}
    </div>
  )
}

export default SocialMedia