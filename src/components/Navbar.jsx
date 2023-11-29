import React  from 'react'
import { useState } from 'react'
import { FaBars, FaTimes , FaGithub , FaLinkedin, FaFacebook  } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll'

import Logo from '../assets/logo1.png'

const Navbar = () => {

  const [nav,setNav] = useState(false)

  const handleClick = () => setNav(!nav)   


  return (
    <div className='fixed w-full h-[80px] flex  justify-between mt-[-40px] items-center ml-[-25px] px-4 bg-[#0a192f] text-gray-300
    max-w-screen-xl  flex-wrap  mx-auto p-4'>
        <div>
          <img src={Logo} alt="Logo Image" style={{ width: '50px'}} />
        </div>
       

            <ul className='hidden md:flex'>
               <li><Link className='' to='home' smooth={true} duration={500}>Home</Link></li>
               <li><Link className='' to='about' smooth={true} duration={500}>About</Link></li>
               <li><Link className='' to='skills' smooth={true} duration={500}>Skills</Link></li>
               <li><Link className='' to='work' smooth={true} duration={500}>Works</Link></li>
               <li><Link className='' to='contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
        
        
        <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} className='' to='home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl'><Link  onClick={handleClick} className='' to='about' smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl'><Link  onClick={handleClick} className='' to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-4xl'><Link  onClick={handleClick} className='' to='work' smooth={true} duration={500}>Works</Link></li>
                <li className='py-6 text-4xl'><Link  onClick={handleClick} className='' to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
           <ul>
            <li className='w-[160px] h-[60px] justify-between items-center'>
               <a className='flex justify-center items-center  w-full text-gray-300 ml-[-90px] hover:ml-[-10px]  duration-300 bg-blue-600' 
               href="">
                <p className='flex justify-between items-center mr-4'>Linkedin</p> <FaLinkedin size={30} />
               </a>
            </li>
            <li className='w-[160px] h-[60px] justify-between items-center'>
               <a className='flex justify-center items-center  w-full text-gray-300 ml-[-90px] hover:ml-[-10px] duration-300 bg-[#333333]' 
               href="">
               <p className='flex justify-between items-center mr-4'> Github</p> <FaGithub size={30} />
               </a>
            </li>
            <li className='w-[160px] h-[60px] justify-between items-center'>
               <a className='flex justify-center items-center  w-full text-gray-300 ml-[-90px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]' 
               href="">
                <p className='flex justify-between items-center mr-4'>Email</p> <HiOutlineMail size={30} />
               </a>
            </li>
            <li className='w-[160px] h-[60px] justify-between items-center'>
               <a className='flex justify-center items-center  w-full text-gray-300 ml-[-90px] hover:ml-[-10px] duration-300 bg-[#565f69]' 
               href="">
                 <p className='flex justify-between items-center mr-4'>Resume</p> <BsFillPersonLinesFill size={30} />
               </a>
            </li>

           </ul>
        </div>

    </div>
  )
}

export default Navbar