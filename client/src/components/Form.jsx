import React from "react"
import { Text } from "./Text";

const FormRoot = ({ onSubmit, className = '', children, ...props }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      onSubmit?.(data);
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className={`space-y-6 ${className}`}
        {...props}
      >
        {children}
      </form>
    );
  };
  
  const FormField = ({ className = '', children, ...props }) => {
    return (
      <div className={`space-y-4${className}`} {...props}>
        {children}
      </div>
    );
  };
  
  const FormLabel = ({ className = '', children, ...props }) => {
    return (
      <Text 
        variant="small" 
        className={`block text-slate-200 ${className}`}
        {...props}
      >
        {children}
      </Text>
    );
  };
  
  const FormMessage = ({ className = '', children, ...props }) => {
    if (!children) return null;
    
    return (
      <Text 
        variant="small" 
        className={`text-red-500 text-md ${className}`}
        {...props}
      >
        {children}
      </Text>
    );
  };
  
  export const Form = {
    Root: FormRoot,
    Field: FormField,
    Label: FormLabel,
    Message: FormMessage,
  };