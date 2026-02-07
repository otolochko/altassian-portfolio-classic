import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "outline" }) => {
  const base =
    "px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 justify-center text-sm sm:text-base";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_12px_32px_-18px_rgba(37,99,235,0.8)]"
      : "border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-zinc-800";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
