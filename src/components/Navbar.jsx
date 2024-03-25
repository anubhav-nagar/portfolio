import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [navbarBtn, setNavbarBtn] = useState(false);
  function handleNavbarBtn(){
    setNavbarBtn(!navbarBtn);
  }
  return (
    <div className='text-slate-100 h-[80px] max-w-[1200px] mx-auto flex justify-between items-center'>
      <h1 className='text-3xl font-bold primary-color ml-4 mt-2'>Anubhav Nagar</h1>
      <ul className="hidden md:flex">
        <li className="p-5"><a href='#about'>About</a></li>
        <li className="p-5"><a href='#work'>Work</a></li>
        <li className="p-5"><a href='#contact'>Contact</a></li>
      </ul>
      <div onClick={handleNavbarBtn} className='text-slate-100 cursor-pointer self-align-0 inline-block md:hidden mr-6'>{navbarBtn ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}</div>
      <div className={navbarBtn ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl primary-color ml-4 mt-8'>Anubhav Nagar</h1>
        <ul className="p-8 text-2xl">
          <li className="p-5"><a href='#about'>About</a></li>
          <li className="p-5"><a href='#work'>Work</a></li>
          <li className="p-5"><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar