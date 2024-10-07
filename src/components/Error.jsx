import React from 'react'
import { useTheme} from '../Context/ThemeContext'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Error = () => {

  const { theme } =  useTheme();
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div>

      <Navbar />

      <div className={`w-screen h-screen flex flex-col space-y-8 items-center justify-center ${theme === 'dark' ? 'bg-[#0A0A0A] text-neutral-50' : 'bg-[#F3F3FF] text-neutral-950'}`} >

        <div className="text-center space-y-1">
          <h2 className='text-xl md:text-4xl'>Something went wrong!</h2>
          <h4 className='text-sm'>Please Try Again Later</h4>
        </div>
        <button onClick={handleClick} className={`bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] text-white text-base font-medium lg:font-semibold px-4 py-2 rounded`}>Go to Home Page</button>

      </div >
    </div>
  )
}

export default Error