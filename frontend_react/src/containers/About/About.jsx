import React, { useEffect, useState} from 'react'
import { AppWrap,MotionWrap} from '../../Wrapper'
import './About.scss'
import { motion } from 'framer-motion'
import {urlFor,client} from '../../client';

const About = () => {
  const [about,setAbout]=useState([]);

  useEffect(() => {
    const query='*[_type == "abouts"]';

    client.fetch(query).then((res)=>{
      setAbout(res);
    })
  },[]);


  return (
    <div className='app__about'>
      <h2 className='app__about-head-text'>
        I Know That <span>Good Design</span> Means <span><br/>Good Business</span>
      </h2>

      <div className='app__about-all'>
        {about.map((item,index)=>(
          <motion.div
          whileHover={{ scale: 1.1 }}
          whileInView={{opacity:1}}
          transition={{ duration: 0.5 ,type:'tween'}}
          >
            <div className='app__about-item'>
              <div className='app__about-item-img'>
              <img src={urlFor(item.imgUrl)} alt={item.title} />
              </div>
              <h4 className='app__about-title'>{item.title}</h4>
              <p className='p-text'>{item.description}</p>
            </div>
              
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(About,'app__about'),'about');
