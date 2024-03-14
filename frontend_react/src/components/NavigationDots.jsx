import React from 'react'
import './NavigationDots.scss'
const NavigationDots = ({active}) => {
  return (
    <div className='app__navigationDots app__flex'>
      {
        ['home','about','work','skills','testimonials','contact'].map((item)=>(
            <a href={`#${item}`}
            style={active === item ? {backgroundColor:'#313bac'}:{backgroundColor:'#e4e4e4'}}
            />
        ))
      }
    </div>
  )
}

export default NavigationDots