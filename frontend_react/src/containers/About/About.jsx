import {React,useState,useEffect} from 'react';
import './About.scss';
import {motion} from 'framer-motion';
import {images} from '../../constants';
import {client} from '../../client';
import {AppWrap,MotionWrap} from '../../Wrapper';


const About = () => {

  const abouts=[
    {title:'Full Stack development',description:'I am a web developer with experience in building web applications using JavaScript, React, Node.js, and other modern technologies.',imgUrl:images.about01},
    {title:'Frontend Development',description:'I have a passion for building beautiful and functional websites',imgUrl:images.about02},
    {title:'BackEnd Developer',description:'I code backend in modern technologies like Express.js and MongoDB',imgUrl:images.about03},
    {title:'Web Animations',description:'I like to code animations that give aesthetic look to websites',imgUrl:images.about04}
  ]
  
  return (
    <div className='app__about'>
      <h1 className='head-text'>
      I know that
      <span> Good Design</span>
      <br/>
       means
      <span> Good Business</span>
    </h1>


    <div className='app__profiles'>
        {abouts.map((about,index) => (
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5,type:'tween'}}
          className='app__profile-item'
          key={about.title+index}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop:20}}>{about.description}</p>
          </motion.div>
      ))}
    </div>
    </div>
    
  )
}

export default AppWrap(
  MotionWrap(About,'app__about'),
  'about',
  "app__whitebg"
);