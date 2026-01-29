import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
    'bg-[#FF6B35] text-white hover:bg-[#e55a2b] shadow-lg shadow-orange-500/20',
    secondary: 'bg-white text-green-700 hover:bg-green-50 shadow-md',
    outline: 'border-2 border-white text-white hover:bg-white/10',
    whatsapp:
    'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-green-500/20'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`
        inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200
        disabled:opacity-50 disabled:pointer-events-none
        ${variants[variant]}
        ${sizes[size]}
        ${className || ''}
      `}
      {...props}>

      {children}
    </motion.button>);

}