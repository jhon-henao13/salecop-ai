import React from 'react';

export default function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: "bg-salecop-orange/10 text-salecop-orange",
    dark: "bg-salecop-darkbrown text-salecop-cream",
    success: "bg-green-100 text-green-800"
  };

  return (
    <span className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}