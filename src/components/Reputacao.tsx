"use client";

import { useReputacao } from "../actions";

const colors = [
  "bg-red-500",
  "bg-orange-500",
  "bg-yellow-500",
  "bg-gray-500",
  "bg-green-300",
  "bg-green-700",
];

export const Reputacao = () => {
  const { selected, handleClick } = useReputacao();

  return (
    <div className="flex flex-row h-20 w-full justify-center items-center -mt-12">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`h-8 w-16 ${color} cursor-pointer transition-all duration-200 rounded border-2 border-black ${
            selected === index ? "transform scale-105 outline outline-8 outline-white" : ""
          }`}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};
