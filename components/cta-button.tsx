import Link from "next/link";

interface CTAButtonProps {
  variant?: "primary" | "accent";
  className?: string;
}

export function CTAButton({ variant = "primary", className = "" }: CTAButtonProps) {
  const baseStyles =
    "inline-block w-full md:w-auto px-8 py-4 text-base md:text-lg font-bold text-foreground rounded-full border-2 border-foreground transition-all duration-300 hover:scale-105 text-center";

  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary",
    accent: "bg-gradient-to-r from-accent to-accent-dark hover:from-accent-dark hover:to-accent",
  };

  return (
    <Link
      href="#oferta"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      COMPRAR COM 50% DE DESCONTO!
    </Link>
  );
}
