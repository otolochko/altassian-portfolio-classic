import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" }) => {
  const base =
    "px-6 py-3 rounded-md font-semibold transition-all duration-300 inline-flex items-center gap-2 justify-center";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
      : "border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
