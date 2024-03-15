import React from 'react'
import {NavigationDots, SocialMedia} from '../components';
import './AppWrap.scss'

const AppWrap = (Component,idName,className) => function HOC(){
  return (
    <div id={idName} className={`app__container ${className}`}>
      <div className='app__wrapper-socialmedia'><SocialMedia/></div>

      <div className='app__wrapper app__flex'>
      <Component/>
      <div className='copyright'>
        <p className='p-text'>@MONIS 2024</p>
        <p className='p-text'>ALL RIGHTS RESERVED.</p>
      </div>
      </div>

      <div className='app__wrapper-navigationdots'><NavigationDots active={idName}/></div>
    </div>
  )
}

export default AppWrap