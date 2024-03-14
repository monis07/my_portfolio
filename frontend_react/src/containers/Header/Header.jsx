import React from 'react'
import './Header.scss'
import { AppWrap } from '../../Wrapper'
import { motion } from 'framer-motion'
import {images} from '../../constants'

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
      whileInView={{x:[-100,0], opacity:[0,1]}}
      transition={{duration:0.85}}
      className='app__header-intro'
      >
        <div className='app__header-name'>
          <span>👋</span>
          <div>
          <p className='p-text'>Hello, I am</p>
          <h1 className='head-text'>Monis</h1>
          </div>
        </div>
        <div className='app__header-post'>
          <p className='p-text'>FULL STACK DEVELOPER</p>
        </div>
      </motion.div>

      <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration:0.5, delayChildren:0.5}}
      className='app__header-profile'
      >
        <img src={images.profile} alt="profile-pic" />
        <motion.img
        whileInView={{scale:[0,1]}}
        transition={{duration:1, ease:'easeInOut'}}
        src={images.circle}
        alt="profile-circle"
        className='app__header-profile-circle'
        >
        </motion.img>

      </motion.div>
      <motion.div
      whileInView={{scale:[0,1]}}
      transition={{duration:1, ease:'easeInOut'}}
      className='app__header-skills'
      >
        <div className='app__header-skill'>
          <img src={images.react} alt="react" />
        </div>
        <div className='app__header-skill'>
          <img src={images.node} alt="node"/>
        </div>
        <div className='app__header-skill'>
          <img src={images.sass} alt="sass"/>
        </div>
        
      </motion.div>
    </div>
  )
}

export default AppWrap(Header,'home');