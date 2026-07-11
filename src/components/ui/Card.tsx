import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined';
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className = '', ...props }, ref) => {
    const baseStyles = 'rounded-lg transition-all duration-300';
    const variantStyles = {
      default: 'bg-white dark:bg-dark-800 shadow-md hover:shadow-lg',
      outlined: 'border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-900',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  },
);

Card.displayName = 'Card';
export default Card;
