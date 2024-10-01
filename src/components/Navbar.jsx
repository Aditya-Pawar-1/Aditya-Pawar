import React from 'react'
import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const handleResume = () => {
    console.log("handleResume");
    window.open('https://drive.google.com/file/d/1CCQc2CU_NW_v-4X6SdOZY1Cbs_V__-ie/view', '_blank');
};

const Navbar = ({ toggleTheme, theme }) => {
    return (
        <nav className="flex justify-between items-center mb-16 mx-14">
            <img className='w-12' src="Logo.svg" alt="Logo" />
            <div className="flex items-center gap-8 font-Poppins font-semibold text-lg">
                <a href="/">Home</a>
                <a href="/">Project</a>
                <a href="/">Contact</a>
                <button onClick={toggleTheme} className={`w-12 h-12 flex items-center justify-center border rounded-full border-none text-white bg-gradient-to-r from-[#8E05C2] to-[#CD50FD]`}>
                    {theme === 'dark' ? <BsSun size={"1.3em"} /> : <FaMoon size={"1.3em"} />}
                </button>

                <button onClick={() => handleResume()} className="bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] text-white font-semibold px-4 py-2 rounded">
                    Resume
                </button>
            </div>
        </nav>
    )
}

export default Navbar