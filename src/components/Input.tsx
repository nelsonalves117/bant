import React from "react";

export type InputProps = {
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: string;
  height?: string;
  fontSize?: string;
};

export function Input({
  placeholder = "Digite o número da Lead",
  className = "w-4/5 p-2 border border-gray-600 rounded-lg text-white placeholder-gray-500 bg-black bg-opacity-50 text-center",
  style = {},
  width = "70%",
  height = "3rem",
  fontSize = "1rem",
}: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`${className} focus:placeholder-transparent`}
      style={{ ...style, width, height, fontSize }}
    />
  );
}
