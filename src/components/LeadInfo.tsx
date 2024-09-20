import React from "react";
import { Title } from "../components/Title";
import { Button } from "../components/Button";

export type LeadInfoProps = {
  lead: {
    number: string;
    name: string;
    description: string;
  };
};

export function LeadInfo({ lead }: LeadInfoProps) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black bg-opacity-50 rounded-lg p-4 text-white border-2 border-white border-opacity-50 space-y-6 w-96 h-80 -ml-40 mt-3 flex flex-col relative">
        <div className="text-center">
          <Title>Confirme as informações</Title>
        </div>
        <div className="absolute top-16 left-4 right-4 space-y-4">
          <p className="font-bold text-lg">
            Número da Lead: <span className="font-normal">{lead.number}</span>
          </p>
          <p className="font-bold text-lg">
            Nome do Cliente: <span className="font-normal">{lead.name}</span>
          </p>
          <p className="font-bold text-lg">
            Nome da Empresa: <span className="font-normal">{lead.description}</span>
          </p>
        </div>
        <div className="flex-grow"></div>
        <Button href="/main" style={{ width: "100%" }} className="mt-auto">
          Confirmar Lead
        </Button>
      </div>
    </div>
  );
}
