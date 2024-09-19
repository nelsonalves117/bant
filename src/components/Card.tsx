"use client";

import { Title } from "./Title";
import Image from "next/image";
import { Reputacao } from "../components/Reputacao";
import { Input } from "../components/Input";

export type CardProps = {
  title: string;
  svgSrc?: string;
  isSelected: boolean;
  onClick: () => void;
};

export function Card({ title, svgSrc, isSelected, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-gray-900 bg-opacity-50 rounded-2xl flex flex-col items-center relative cursor-pointer transition-transform duration-300 border-2 border-white border-opacity-50 mb-14`}
      style={{
        width: "27rem",
        height: "30rem",
        boxShadow: isSelected ? "1.5rem 1.5rem 3rem rgba(0, 0, 0, 0.7)" : "none",
        transform: isSelected ? "translate(-0.8rem, -0.8rem)" : "none",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 ">
        <Title>{title}</Title>
      </div>
      {svgSrc && (
        <div className="relative w-32 h-32 mt-16">
          <Image src={svgSrc} alt="SVG Image" layout="fill" objectFit="contain" />
        </div>
      )}
      {title === "Vende no" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 mt-96">
          <div onClick={(e) => e.stopPropagation()} className="p-4 mb-8">
            <Reputacao />
            <Input placeholder="Copie a URL do produto (apenas Meli)" width="24rem" height="3rem" />
          </div>
        </div>
      )}
    </div>
  );
}
