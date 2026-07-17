import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-terracotta text-cream border border-transparent",
    "hover:bg-rust shadow-warm-sm hover:shadow-warm-md",
  ].join(" "),
  secondary: [
    "bg-espresso text-cream border border-transparent",
    "hover:bg-mocha shadow-warm-sm hover:shadow-warm-md",
  ].join(" "),
  outline: [
    "bg-transparent text-espresso border border-espresso/20",
    "hover:bg-espresso/5 hover:border-espresso/40",
  ].join(" "),
  ghost: [
    "bg-transparent text-terracotta border border-transparent",
    "hover:bg-terracotta/10",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-4 text-sm gap-1.5 rounded-full",
  md: "h-11 px-6 text-base gap-2 rounded-full",
  lg: "h-14 px-8 text-lg gap-2.5 rounded-full",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  loading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      disabled={isDisabled}
      className={[
        "inline-flex items-center justify-center font-sans font-semibold",
        "transition-all duration-200 ease-out active:scale-[0.97]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        className,
      ].join(" ")}
      {...props}
    >
      {loading ? (
        <Spinner size={size} />
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="shrink-0">{icon}</span>
          )}
          {children}
          {icon && iconPosition === "right" && (
            <span className="shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  );
}

function Spinner({ size }: { size: ButtonSize }) {
  const dim = size === "sm" ? 14 : size === "md" ? 16 : 20;
  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 24 24"
      fill="none"
      className="animate-spin"
      aria-label="Cargando"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="40 20"
      />
    </svg>
  );
}
