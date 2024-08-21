import React from 'react';

// Define the type for the component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  textColor?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  bgColor = 'bg-red-500',
  textColor = 'text-white',
  className = 'w-full',
  ...props
}) => {
  return (
    <button
      type={type} // TypeScript will correctly infer this now
      className={`px-2 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}  // Spread props directly onto the button element
    >
      {children}
    </button>
  );
}

export default Button;
