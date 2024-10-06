import React from 'react'
import { GoNorthStar } from "react-icons/go";

const Pageheading = ({ title, t1, t2, theme }) => {
    return (
        <>
            <div className="container hidden md:block ">
                <div className={`projectHeading w-[100vw] md:h-[40vh] lg:h-screen flex flex-col items-center justify-between p-12 lg:p-28 ${theme === 'dark' ? 'lg:bg-center lg:bg-no-repeat lg:bg-[url(Ellipse.svg)] bg-opacity-35' : ''}`}>

                    <div className='w-[75vw] h-1 bg-gradient-to-r from-[#8E05C2] to-[#CD50FD]'></div>
                    <h3 className='bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] inline-block text-transparent text-center bg-clip-text p-4 font-JuliusSansOne text-6xl lg:text-9xl'>{title}</h3>
                    <div className='w-[75vw] h-1 bg-gradient-to-r from-[#8E05C2] to-[#CD50FD]'></div>
                    {t1 && <div className='w-full lg:-mt-12 flex items-start justify-between'>
                        <h2 className='border-2 px-8 py-2 rounded-full border-[#8E05C2] bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] inline-block text-transparent bg-clip-text '>{t1}</h2>
                        <h2 className='border-2 px-8 py-2 rounded-full border-[#8E05C2] bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] inline-block text-transparent bg-clip-text '>{t2}</h2>
                    </div>}
                </div>
            </div>


            <div className='sm:hidden bg-gradient-to-r from-[#8E05C2] to-[#CD50FD] bg-clip-text flex items-center text-5xl gap-5 pt-4 pb-12 px-4'>
                <GoNorthStar className='text-[#8E05C2]' />
                <h2 className='text-transparent text-center font-JuliusSansOne'>
                    {title}
                </h2>
                <GoNorthStar className='text-[#8E05C2]' />
            </div>
        </>
    )
}

export default Pageheading