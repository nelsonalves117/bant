import { useState } from "react";

export const useReputacao = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelected(index);
  };

  return {
    selected,
    handleClick,
  };
};
