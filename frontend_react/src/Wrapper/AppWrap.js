import React from 'react'
import {NavigationDots, SocialMedia} from '../components';
import './AppWrap.scss';

const AppWrap = (Component,idName,classNames) => function HOC(){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <Component/>
        <div className='app__wrapper app__flex'>
            <div className='copyright'>
                <p className='p-text'>@2024 MONIS</p>
                <p className='p-text'>All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap