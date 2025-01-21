export const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`flex h-9 w-full rounded-md border border-slate-400 bg-transparent 
        px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent 
        file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none 
        focus-visible:ring-1 focus-visible:ring-slate-400 disabled:cursor-not-allowed 
        disabled:opacity-50 invalid:focus:border-red-500 invalid:focus:ring-red-500 
        [&:not(:placeholder-shown):invalid]:border-red-500 
        [&:not(:placeholder-shown):invalid]:ring-red-500 ${className}`}
      {...props}
    />
  )
}