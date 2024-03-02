import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header">

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="intro"
    >
        <div className="intro1">
          <div className='emoji'>👋</div>
          <div>
            <p>Hello, I am</p>
            <h1>Monis Azeem</h1>
          </div>  
        </div>

        <div className="intro2">
          <p>Full Stack Developer</p>
        </div>
    </motion.div>




    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="header-images"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>




    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="header-skills"
    >
      {[images.javascript, images.react, images.sass].map((circle, index) => (
        <div className="all-circles" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
          </div>
      ))}
    </motion.div>


  </div>
);

export default Header;