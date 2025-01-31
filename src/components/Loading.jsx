import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext'

const Loading = () => {
    const { theme } = useTheme();
    return (
        <div data-theme={`${theme === 'dark' ? 'dark' : 'light'}`}>
            <motion.div
                className="z-[999] w-screen min-h-screen absolute dark:bg-[#0A0A0A] bg-[#F3F3FF]"
                aria-label="Loading Screen"
                animate={{ y: '-100vh', display: 'none' }}
                transition={{ delay: 1, duration: 0.5, ease: "easeIn" }}
            >
                <motion.div
                    className="h-2 rounded-full dark:bg-[#F3F3FF] bg-[#0A0A0A]"
                    initial={{ width: 0 }}
                    animate={{ width: '100vw' }}
                    transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
                >
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Loading;
