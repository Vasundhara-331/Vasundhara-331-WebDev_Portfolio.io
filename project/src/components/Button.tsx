import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'secondary' }) => {
  const baseStyles = "px-4 py-2 rounded transition-all duration-200 font-semibold";
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 hover:scale-105",
    secondary: "bg-gray-800 text-gray-300 hover:bg-gray-700"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;