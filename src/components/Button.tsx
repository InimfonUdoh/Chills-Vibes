import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
>;

interface ButtonProps extends NativeButtonProps {
  variant?: "gold" | "ghost";
  icon?: ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "gold", icon, fullWidth, className = "", children, ...props }, ref) => {
    const base = variant === "gold" ? "btn-gold" : "btn-ghost";
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.96 }}
        className={`${base} ${fullWidth ? "w-full" : ""} ${className} disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100`}
        {...props}
      >
        {children}
        {icon}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
