"use client";

import { useState } from "react";
import { Card } from "../components/Card";

const cardData = [
  { title: "Não vendo", svgSrc: "/nao-vende.svg" },
  { title: "Vende no", svgSrc: "/mercado-livre.png" },
  { title: "Shopee", svgSrc: "/shopee.png" },
];

export default function ParentCard() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (title: string) => {
    setSelectedCard(selectedCard === title ? null : title);
  };

  return (
    <div className="flex justify-center gap-14 relative">
      {cardData.map((card, index) => (
        <div key={index} className="relative">
          <Card
            title={card.title}
            svgSrc={card.svgSrc}
            isSelected={selectedCard === card.title}
            onClick={() => handleCardClick(card.title)}
          />
        </div>
      ))}
    </div>
  );
}
