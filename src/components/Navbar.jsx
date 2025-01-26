import { BsSun } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuopen, setIsMenuopen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleResume = () => {
    window.open('https://drive.google.com/file/d/1CCQc2CU_NW_v-4X6SdOZY1Cbs_V__-ie/view', '_blank');
  };

  const handleMenu = () => {
    window.scrollTo({ top: 0 });
    setIsMenuopen(!isMenuopen)
  }

  return (
    <div className={`w-screen ${isMenuopen ? 'fixed h-screen z-99' : 'block'}`}>
      <nav
        className={`h-[20vh] w-full max-w-screen overflow-hidden flex items-center justify-between px-2 md:pt-6 pb-2 ${theme === 'dark' ? 'bg-[#0A0A0A] text-neutral-50' : 'bg-[#F3F3FF] text-neutral-950'}`}
      >
        <div className="flex items-center gap-24 md:pl-10 w-[70%]">
          <img src='/Logo.svg' alt="portfolio Website Logo" />

          <div className="hidden md:block space-x-4 font-semibold text-xl">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>


        <div className="flex items-center justify-end pr-2 gap-4 w-[30%]">

          <button
            onClick={() => toggleTheme()}
            className={`w-10 h-10 sm:w-12 sm:h-12 p-2 flex items-center justify-center border rounded-full border-none text-white bg-gradient-to-r from-[#8E05C2] to-[#CD50FD]`}
          >
            {theme === 'dark' ? <BsSun size={"1.3em"} /> : <FaMoon size={"1.3em"} />}
          </button>

          <div
            className={`menu flex w-[30px] h-[30px] flex-col items-center justify-center z-99 sm:hidden ${isMenuopen ? 'gap-0' : 'gap-1'}`}
            onClick={handleMenu}
          >
            <motion.span
              className="bg-white w-[25px] h-[2.5px] rounded-md"
              animate={{
                rotate: isMenuopen ? 45 : 0,
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>

            <span className={`bg-white w-[25px] h-[2.5px] rounded-md ${isMenuopen ? 'hidden' : 'block'}`}></span>

            <motion.span
              className="bg-white w-[25px] h-[2.5px] rounded-md"
              animate={{
                rotate: isMenuopen ? -45 : 0,
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>

          </div>

          <button
            onClick={handleResume}
            className="bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] text-white text-base font-medium lg:font-semibold px-4 py-2 rounded hidden sm:block"
          >
            Resume
          </button>
        </div>
      </nav >

      <motion.div
        className={`menuopen absolute z-99 w-full h-full flex flex-col items-center pt-12 text-xl gap-4 ${theme === 'dark' ? 'bg-[#0A0A0A] text-neutral-50' : 'bg-[#F3F3FF] text-neutral-950'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuopen ? '90vh' : 0, opacity: isMenuopen ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 25, duration: 2000 }}
        style={{ overflow: 'hidden' }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <button
          onClick={handleResume}
          className="bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] text-white text-base font-medium lg:font-semibold px-4 py-2 rounded"
        >
          Resume
        </button>
      </motion.div>
    </div>
  );
};

export default Navbar;
