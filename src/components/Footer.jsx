import { BsArrowUp } from "react-icons/bs";
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const { theme } = useTheme();

    return (
        <footer
            data-theme={`${theme === 'dark' ? 'dark' : 'light'}`}
            className="h-[15vh] mt-8 flex items-center justify-center relative border-t-1 md:border-t-2 border-[#1E1E1E] dark:border-[#FEFEFF] font-Poppins" >
            <h3 className='hidden sm:block text-lg font-bold p-2 my-4'>Website created by Aditya Pawar © 2025</h3>
            <h3 className='text-base sm:hidden p-2 my-4 text-center'>Website created <br /> by Aditya Pawar © 2025</h3>
            <button type="button" onClick={handleTop} className='dark:bg-[#FEFEFF] bg-[#1E1E1E] dark:text-neutral-950 text-neutral-50 p-2 md:p-7 rounded-full absolute bottom-5 right-8'>
                <BsArrowUp className="text-2xl" />
            </button>
        </footer>
    )
}

export default Footer