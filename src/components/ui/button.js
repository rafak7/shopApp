export function Button({ children, variant, size, ...props }) {
    const baseClasses = "py-2 px-4 rounded inline-block";
    const variantClasses = variant === 'outline' ? 'bg-transparent border' : 'bg-primary text-white';
    const sizeClasses = size === 'lg' ? 'text-lg' : 'text-base';
  
    return (
      <button {...props} className={`${baseClasses} ${variantClasses} ${sizeClasses}`}>
        {children}
      </button>
    );
  }
  