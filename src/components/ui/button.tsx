import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors";
  const variantStyles = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-gray-700 text-gray-300 hover:bg-gray-800",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

