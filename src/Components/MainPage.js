import React from 'react'
import Card from './Card'
import ketaki from '../assets/Ketaki-Image.jpeg'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
import {SiGmail} from 'react-icons/si'
const MainPage = () => {
  return (
      <div className='--container --m --p'>
          <h1 className='--p'> Hello world! :) </h1>
          <Card>
              <div className='--flex-between'>
                  <h4 className='--line --p'>Ketaki Tank</h4> 
                  <img src={ketaki} className="--img" alt="Profile" />
              </div>
              <h4>B.Tech CSE (AIML) - 3rd year</h4>
              <div className='--logos --flex-center --p2'>
              <a href="https://www.linkedin.com/in/ketaki-tank/"><IoLogoLinkedin size={30}/></a>
                 <a href="https://github.com/ketakitankk"> <IoLogoGithub size={30} /></a>
                <a href="mailto:tankkp@rknec.edu"><SiGmail size={30} /></a>  
              </div>
              
          </Card>
    </div>
  )
}

export default MainPage