import React from 'react'
import './Notice.css'
import Plant from '../assets/bc-plant.svg'
import {FaExclamationTriangle, FaGithub, FaLinkedin, FaPlus, FaTwitter} from 'react-icons/fa';

const Notice = () => {
    return (
        <div className='hero'>
            <div className='container '>
               <div className='content-box'>
               <FaExclamationTriangle className='icon'/>
                <p>Lorem ipsum dolor mit</p>
            </div>
                </div> 
            
        </div>
    )
}

export default Notice
