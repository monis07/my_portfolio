import React from 'react'
import { useState,useEffect } from 'react';
import {urlFor,client} from '../../client'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Testimonial.scss'
import {AppWrap,MotionWrap} from '../../Wrapper'

const Testimonial = () => {
const [testimonials,setTestimonials] = useState([]);
const [current,setCurrent] = useState(0);

const handleClick=(index)=>{
    setCurrent(index);
}
    useEffect(() => {
        const query='*[_type == "testimonials"]';
        client.fetch(query).then((data)=>{
            setTestimonials(data);
        })
    },[])

  return (
    <>
    {testimonials.length &&
    <div className='app__wrapper-testimonials'>
            <div className='app__testimonial'>
            <div className='app__testimonial-img'>
                <img src={urlFor(testimonials[current].imgUrl)} alt={testimonials[current].name} />
            </div>
            <div className='app__testimonial-details'>
                <div className='app__testimonial-feedback'>
                    <p>{testimonials[current].feedback}</p>
                </div>
                <div className='app__testimonial-title'>
                    <h4>{testimonials[current].name}</h4>
                    <h5>{testimonials[current].company}</h5>
                </div>
            </div>
        </div>
        <div className='app__testimonials-arrow'>
            <div className='arrow'
            onClick={()=>handleClick(current === 0 ? testimonials.length-1 : current-1)}
            >
                <HiChevronLeft />
                </div>
            <div className='arrow'
            onClick={()=>handleClick(current === testimonials.length-1 ? 0 : current+1)}
            ><HiChevronRight/></div>
        </div>
    </div>
    }
    </>
    )
}

export default AppWrap(MotionWrap(Testimonial,'app__testimonials'),'testimonials');