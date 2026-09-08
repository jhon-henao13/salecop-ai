import React from 'react';

const Input = ({ label, id, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && <label htmlFor={id} className="block text-sm font-medium text-salecop-charcoal mb-1">{label}</label>}
      <input
        id={id}
        className={`w-full px-4 py-2 border border-salecop-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-salecop-orange ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;