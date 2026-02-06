// src/components/ui/Button.jsx
const Button = ({ children, variant = "primary", ...props }) => {
  const base =
    "px-4 py-2 rounded-md text-sm font-medium transition focus:outline-none";

  const styles = {
    primary: "bg-cyan-500 text-black hover:bg-cyan-400",
    outline:
      "border border-slate-600 text-slate-200 hover:border-cyan-500 hover:text-cyan-400",
    ghost: "text-slate-300 hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;