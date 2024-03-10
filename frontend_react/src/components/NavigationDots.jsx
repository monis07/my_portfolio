import React from 'react'
import './NavigationDots.scss'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills','testimonials', 'contact'].map((item, index) => (
          <div className='dots'>
            <a 
            href={`#${item}`}
            key={item+index}
            className='app__navigation-dot'
            style={active === item ? {backgroundColor:'#313BAC', width:'7px', height:'7px', borderRadius:'50%'} : {backgroundColor:'grey', width:'7px', height:'7px', borderRadius:'50%'}}
        ></a>
          </div>
            
        ))}
    </div>
  )
}
export default NavigationDots