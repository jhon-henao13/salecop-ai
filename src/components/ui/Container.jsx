import React from 'react';

export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-full px-4 sm:px-6 lg:px-8 w-full ${className}`}>
      {children}
    </div>
  );
}