import { Title } from "../../components/Title";
import { Button } from "../../components/Button";

interface Lead {
  number: string;
  name: string;
  description: string;
  owners: string;
}

async function fetchLeadData(): Promise<Lead> {
  console.log("Iniciando a requisição de dados...");

  const options = {
    method: "GET",
    headers: {
      accept: "*/*",
      authorization:
        "Basic Y29udGF0b0BtYW1iYWRpZ2l0YWwuY29tLmJyOmFmYTFmYWYyMGNiMjFiNWMzNDFjOTllOTUyOTliNDczM2VlZTI2ZDY=",
    },
  };

  const response = await fetch("https://app.nutshell.com/rest/leads", options);
  const data = await response.json();

  return data;
}

export default async function Confirm() {
  const lead = await fetchLeadData();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-black bg-opacity-50 rounded-lg p-4 text-white border-2 border-white border-opacity-50 space-y-4">
        <Title>Confirme as informações</Title>
        <p className="font-bold">
          Número da Lead: <span className="font-normal">{lead.number}</span>
        </p>
        <p className="font-bold">
          Nome do Cliente: <span className="font-normal">{lead.name}</span>
        </p>
        <p className="font-bold">
          Nome da Empresa: <span className="font-normal">{lead.description}</span>
        </p>
        <Button href="/main" className="mb-2 mt-4" style={{ width: "100%" }}>
          Confirmar Lead
        </Button>
        <Button href="/" style={{ width: "100%" }}>
          Pesquisar outra Lead
        </Button>
      </div>
    </div>
  );
}
