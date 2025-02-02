import { BsArrowUp } from "react-icons/bs";
const Footer = () => {
    const handleTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className={`h-[15vh] mt-4 flex items-center justify-center relative`} >
            <h3 className='hidden sm:block text-lg p-2 my-4'>Website created by Aditya Pawar © 2025</h3>
            <h3 className='text-base sm:hidden p-2 my-4 text-center'>Website created <br /> by Aditya Pawar © 2025</h3>
            <button type="button" onClick={handleTop} className='dark:bg-[#FEFEFF] bg-[#1E1E1E] dark:text-neutral-950 text-neutral-50 p-2 md:p-7 rounded-full absolute bottom-5 right-8'>
                <BsArrowUp className="text-2xl lg:text-4xl" />
            </button>
        </footer>
    )
}

export default Footer