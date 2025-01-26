import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <motion.div
            className="bg-black z-[999] w-screen min-h-screen absolute"
            aria-label="Loading Screen"
            animate={{ y: '-100vh', display: 'none' }}
            transition={{ delay: 1, duration: 0.5, ease: "easeIn" }}
        >
            <motion.div
                className="h-2 bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100vw' }}
                transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }} // Smooth custom cubic-bezier curve
            >
            </motion.div>


        </motion.div>
    );
};

export default Loading;
