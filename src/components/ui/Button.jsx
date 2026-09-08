import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Button = forwardRef(({ children, variant = 'primary', size = 'md', className = '', ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-salecop-orange disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-salecop-orange text-white hover:bg-[#8a330d] shadow-lg shadow-salecop-orange/30",
    secondary: "bg-salecop-darkbrown text-white hover:bg-salecop-deepbrown",
    outline: "border-2 border-salecop-orange text-salecop-orange hover:bg-salecop-orange hover:text-white",
    ghost: "text-salecop-charcoal hover:bg-black/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';
export default Button;