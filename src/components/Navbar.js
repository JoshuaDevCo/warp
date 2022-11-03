import React, {useState} from 'react'
import {FaBars, FaTimes,FaWarehouse} from 'react-icons/fa'
import './Navbar.css'
import Logo from '../assets/logo-warp.png'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
            <img src={Logo} alt='' width={'100px'}/>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                    <FaWarehouse size={20} style={{color: '#8500C5',marginRight:'5px',verticalAlign:'sub'}}/>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                    <FaWarehouse size={20} style={{color: '#8500C5',marginRight:'5px',verticalAlign:'sub'}}/>
                        <a href='/'>Dashboard</a>
                    </li>
                    <li>
                        <a href='/'>Lottery</a>
                    </li>
                    <li>
                        <a href='/'>Coin Flipper</a>
                    </li>
                    <li>
                        <a href='/'>Slots</a>
                    </li>
                    <li>
                        <a href='/'>Swaps</a>
                    </li>
                    <li>
                        <a href='/'>Contact Us</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
