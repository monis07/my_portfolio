import './Work.scss'
import React from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { urlFor, client } from '../../client'
import { useEffect, useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';


const Work = () => {
  const [works, setWorks] = useState([]);
  const [animateCard, setAnimateCard] = useState({ opacity: 1 });
  const [filter, setFilter] = useState([]);
  const [active,setActive]  = useState('All');

  useEffect(() => {
    const query='*[_type == "works"]';
    client.fetch(query).then((res)=>{
      setWorks(res);
      setFilter(res);
    })
  },[]);

const handleWorkFilter = (item)=>{
  setAnimateCard({y:100,opacity:0});
  setActive(item);

  setTimeout(()=>{
    setAnimateCard({y:0,opacity:1});
    if(item === 'All')
    setFilter(works);
  else
  setFilter(works.filter((work)=>work.tags.includes(item)))
  },500);

}

  return (
    <div className='app__work'>
      <h2 className='app__work-head-text'>
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className='app__work-tags'>
        {['Frontend', 'Full Stack', 'All'].map((item, index) => (
          <div 
          key={index} 
          className='app__work-tag'
          onClick={()=>handleWorkFilter(item)}
          style={active === item ? {backgroundColor:'#313bac',color:'white'}:{}}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
      animate={animateCard}
      transition={{duration:0.5, delayChildren:0.5}}
      className='app__work-portfolio'
      >
        {filter.map((item,index)=>(
          <div className='app__work-item'>
            <div className='app__work-item-img'>
              <img src={urlFor(item.imgUrl)} alt={item.name} />

              <motion.div 
              className='app__work-img-hover'
              whileHover={{opacity:[0,1]}}
              transition={{duration:0.5,ease:'easeInOut'}}
              >

                
                  <motion.div
                  whileInView={{scale:1}}
                  whileHover={{scale:[1,0.9]}}
                  transition={{duration:0.5}}
                  className='app__work-img-hover-icon'
                  >
                    <a href={item.projectLink} target="_blank">
                    <AiFillEye />
                    </a>
                  </motion.div>

                  <motion.div
                   whileInView={{scale:1}}
                   whileHover={{scale:[1,0.9]}}
                   transition={{duration:0.5}}
                   className='app__work-img-hover-icon'

                   >
                  <a href={item.codeLink} target='_blank'>

                    <AiFillGithub />
                    </a>
                  </motion.div>

              </motion.div>

            </div>

            <div className='app__work-content'>
              <h4>{item.title}</h4>
              <div className='app__work-content-tag'>
                <p>{item.tags[0]}</p>
              </div>
            </div>
          </div>
        ))
        }

      </motion.div>

    </div>
  )
}

export default AppWrap(MotionWrap(Work,'app__work'),'work');