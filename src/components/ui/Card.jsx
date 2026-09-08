import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div 
      whileHover={hover ? { y: -5 } : {}}
      className={`bg-white/10 rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}