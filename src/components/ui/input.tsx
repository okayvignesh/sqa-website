import * as React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  );
}

