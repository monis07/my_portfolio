import React from 'react'
import {images} from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import {motion} from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const links=['home', 'about', 'work', 'skills', 'testimonials','contact'];
  const [toggle,setToggle]=React.useState(false);
  return (
    <div className='app__navbar app__flex'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <div className='app__navbar-links app__flex'>
        {links.map((link)=>(
          <div className='app__navbar-link app__flex'>
            <div/>
            <p className='bold-text'><a href={`#${link}`}>{link}</a></p>
          </div>
        ))}
      </div>
      <div className='app__navbar-menu app__flex'>
        <HiMenuAlt4 onClick={()=>setToggle(true)}/>
        {toggle && (
        <motion.div
        whileInView={{x:[50,0]}}
        transition={{duration:0.5, ease:'easeInOut'}}
        className='app__navbar-menu-toggle app__flex'
        >
          
          <div className='app__navbar-links-toggle app__flex'>
        {links.map((link,index)=>(
          <div className='app__navbar-link app__flex'>
            <p className='bold-text'><a href={`#${link}`}>{link}</a></p>
          </div>
        ))}
      </div>
      <HiX onClick={()=>setToggle(false)}/>
        </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar