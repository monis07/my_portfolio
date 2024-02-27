import React from 'react'
import {images} from './../../constants';
import {motion} from 'framer-motion';
import './Header.scss';

const Header = () => {
  const scaleVariants={
    whileInView:{
      scale:[0,1],
      opacity:[0,1]
    },
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
  return (
    <div className='app__header app__flex'>
      <motion.div
    whileInView={{x:[-100,0],opacity:[0,1]}}
    transition={{duration:1.8}}
    className='app__header-info'
    >
        <div id="home" className='app__header-badge'>
          <div className='badge-cmp app_flex'>
          <span>👋</span>
            <div style={{marginLeft:20}}>
            <p className='p-text'>Hello! I am</p>
            <h1 className='head-text'>Monis Azeem</h1>
          </div>
        </div>
        <div className='tag-amp app_flex'>
        <p className='p-text'>Full Stack Developer</p>
        </div>

      </div>
    </motion.div>

    <motion.div 
    whileInView={{opacity:[0,1]}}
    transition={{duration:1.8,delayChildren:0.5}}
    className='app__header-img'
    >
      <img src={images.profile} alt='profile-pic'/>
      <motion.img
      whileInView={{scale:[0,1]}}
      transition={{duration:1,ease:'easeInOut'}}
      src={images.circle}
      alt="profile_circle"
      className="overlay_circle"
      >

      </motion.img>

    </motion.div>

    <motion.div
    variants={scaleVariants}
    whileInView={scaleVariants.whileInView}
    >
      {[images.javascript, images.react, images.sass].map((circle,index)=>(
        <div className='circle-cmp app__flex' key={`circle-${index}`}>
          <img src={circle} alt="circle" />
        </div>
      ))}
    
    </motion.div>

    </div>
  )
}

export default Header;