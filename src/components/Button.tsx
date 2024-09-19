import Link from "next/link";
import React from "react";

export type ButtonProps = {
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // Adicionar a prop style
};

export function Button({
  children,
  height = "3rem",
  fontSize = "1.1rem",
  fontWeight = "bold",
  href,
  className,
  style,
}: ButtonProps) {
  const buttonStyle = {
    height,
    fontSize,
    fontWeight,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    ...style,
  };

  const baseClass =
    "bg-white text-black rounded-lg p-2 transition-colors duration-300 hover:bg-[#FECE15]";

  if (href) {
    return (
      <Link href={href} legacyBehavior passHref>
        <a className={`${baseClass} ${className}`} style={buttonStyle}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button className={`${baseClass} ${className}`} style={buttonStyle}>
      {children}
    </button>
  );
}
