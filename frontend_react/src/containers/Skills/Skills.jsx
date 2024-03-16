import React, { useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import './Skills.scss'
import {urlFor,client} from '../../client'
import {AppWrap,MotionWrap} from '../../Wrapper';

const Skills = () => {
  const [skills,setSkills] = useState([]);
  const [experiences,setExperiences] = useState([]);

  useEffect(() => {
    const skills_query='*[_type == "skills"]';
    const experiences_query='*[_type == "experiences"]';

    client.fetch(skills_query).then(data => {
      setSkills(data);
    })
    client.fetch(experiences_query).then(data => {
      setExperiences(data);
    })

  },[])

  return (
    <div className='app__wrapper'>
      <h1>Skills & Experiences</h1>
      <div className='app__skills-experiences'>
        <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:1.0}}
        className='app__skills'
        >
          {skills.map((skill,index)=>(
            <motion.div 
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5}}
            className='app__skill'>
              <div className='app__skill-img'
              style={{backgroundColor:`rgba(${skill.bgColor},0.2)`}}
              >
              <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </motion.div>
          ))}


        </motion.div>
        <motion.div
        className='app__experiences'
        >
          {experiences.map((experience,index)=>(
            <motion.div 
            className='app__experience'>
              <div className='app__experience-year'>
                <h4>{experience.year}</h4>
              </div>
              <motion.div>
                {experience.works.map((item)=>(
                  <>
                  <motion.div
                  whileInView={{opacity:[0,1]}}
                  transition={{duration:0.5}}
                  className='app__experience-details'
                  >
                  <h4>{item.name}</h4>
                  <p>{item.company}</p>
                  <p>{item.desc}</p>
                  </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>

          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Skills,'app__skills'),'skills');