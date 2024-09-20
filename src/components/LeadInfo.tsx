import React from "react";
import { Title } from "../components/Title";
import { Button } from "../components/Button";

export type LeadInfoProps = {
  lead: {
    number: string;
    name: string;
    description: string;
  };
  loading: boolean;
};

const Loading = () => (
  <div className="flex flex-col items-center justify-center h-full">
    <div className="loader border-t-8 border-b-8 border-yellow-500 rounded-full w-12 h-12 mb-4 animate-spin"></div>
    <p className="text-yellow-500">Aguarde...</p>
  </div>
);

export function LeadInfo({ lead, loading }: LeadInfoProps) {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black bg-opacity-50 rounded-lg p-4 text-white border-2 border-white border-opacity-50 space-y-6 w-96 h-80 -ml-40 mt-3 flex flex-col relative">
        <div className="text-center">
          <Title>Confirme as informações</Title>
        </div>
        <div className="absolute top-12 left-4 right-4 space-y-4">
          {loading ? (
            <Loading />
          ) : (
            <>
              <p className="font-bold text-lg">
                Número da Lead: <span className="font-normal">{lead.number}</span>
              </p>
              <p className="font-bold text-lg">
                Nome do Cliente:{" "}
                <span className="font-normal break-all hyphens-auto">
                  {truncateText(lead.name, 52)}
                </span>
              </p>
              <p className="font-bold text-lg">
                Nome da Empresa:{" "}
                <span className="font-normal break-all hyphens-auto">
                  {truncateText(lead.description, 60)}
                </span>
              </p>
            </>
          )}
        </div>
        <div className="flex-grow"></div>
        <Button href="/main" style={{ width: "100%" }} className="mt-auto">
          Confirmar Lead
        </Button>
      </div>
    </div>
  );
}
