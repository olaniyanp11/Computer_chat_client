import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <motion.div
                className="w-5 h-5 border-t-4 border-dotted absolute border-blue-500 rounded-full animate-spin"
                style={{ borderWidth: '2px' }} // Tailwind doesn't support dynamic border width yet
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default Loading;
