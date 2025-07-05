export default function Button({ children, variant = "primary", ...props }) {
    const base = "px-4 py-2 rounded font-medium transition";
    
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    };
  
    return (
      <button className={`${base} ${variants[variant]}`} {...props}>
        {children}
      </button>
    );
  }
  