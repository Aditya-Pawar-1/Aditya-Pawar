import { useTheme } from '../context/ThemeContext';
import Spline from '@splinetool/react-spline';

const Hero = () => {
    const { theme } = useTheme();
    return (
        <div
            data-theme={`${theme === 'dark' ? 'dark' : 'light'}`}
            className='w-screen min-h[80vh] overflow-clip'>
            <div className="text flex flex-col  pl-4 justify-center h-[80vh] md:pl-12 lg:w-[45vw] lg:absolute select-none">
                <h1 className="text-xl md:text-2xl font-light font-Helvetica mb-2">
                    Hi, I'm Aditya Pawar
                </h1>
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold lg:leading-16 font-Poppins dark:text-neutral-200 text-neutral-800 mb-4">
                    Transforming ideas into interactive web experiences.
                </h2>
                <p className="text-base md:text-xl w-[80vw] md:w-[60vw] lg:w-[45vw] font-normal mb-12">
                    A passionate <span className="dark:text-[#CD50FD] text-[#8E05C2]">UI/UX Designer</span> and <span className="dark:text-[#CD50FD] text-[#8E05C2]">Full-Stack MERN Developer</span> with a keen eye for crafting intuitive, user-friendly digital experiences. With expertise in Figma, JavaScript, TypeScript, React, Node.js, and MongoDB, I specialize in creating seamless interfaces and optimizing user journeys. I am driven by innovation and committed to designing fluid, scalable solutions for modern digital challenges.
                </p>
            </div>
            <div className="spline hidden lg:block">
                <Spline className='hidden lg:block ml-[40vw] max-w-[70vw] max-h-[70vh] overflow-x-clip' scene="https://prod.spline.design/Kx3KMLU9LRJ4u9El/scene.splinecode" />
            </div>
        </div>
    )
}

export default Hero