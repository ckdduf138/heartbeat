import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-gradient-to-br from-primary to-primary-dark text-white border-0 shadow-[0_2px_8px_rgba(62,212,190,0.3)] hover:shadow-[0_4px_12px_rgba(62,212,190,0.4)]',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white',
    accent: 'bg-gradient-to-br from-accent via-[#ff8ab4] to-[#ff8ab4] text-white border-0 shadow-[0_2px_8px_rgba(255,107,157,0.3)] hover:shadow-[0_4px_12px_rgba(255,107,157,0.4)]',
  }[variant];
  
  return (
    <button
      className={`font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-px active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 ${variantClasses} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
