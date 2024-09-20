import Image from "next/image";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { LeadInfo } from "../components/LeadInfo";

interface Lead {
  number: string;
  name: string;
  jobTitle: string;
  owners: string;
}

async function fetchLeadData(leadNumber: string): Promise<Lead> {
  const options = {
    method: "GET",
    headers: {
      accept: "*/*",
      authorization:
        "Basic Y29udGF0b0BtYW1iYWRpZ2l0YWwuY29tLmJyOmFmYTFmYWYyMGNiMjFiNWMzNDFjOTllOTUyOTliNDczM2VlZTI2ZDY=",
    },
  };

  const response = await fetch(
    `https://app.nutshell.com/rest/leads?filter[number]=${leadNumber}`,
    options
  );
  const data = await response.json();

  if (data.code === 500) {
    throw new Error("Internal Server Error");
  }

  const leadData = data.leads[0];
  const contactId = leadData.links.contacts[0];
  interface Contact {
    id: string;
    jobTitle: string;
  }

  const contactData = data.contacts.find((contact: Contact) => contact.id === contactId);

  const lead: Lead = {
    number: leadData.number,
    name: leadData.name,
    jobTitle: contactData?.jobTitle || "N/A",
    owners: leadData.owners || "N/A",
  };

  return lead;
}

export default async function Home() {
  const leadNumber = "60030";
  const lead = await fetchLeadData(leadNumber);

  return (
    <div className="bg-mamba-bg flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-4">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center gap-4 -mt-44 ml-32">
          <div className="w-full flex justify-center mb-[5rem]">
            <Image src="/logo.png" alt="Logo" width={450} height={350} quality={100} />
          </div>
          <Title marginTop="-18rem" marginBottom="3rem">
            Encontre a lead
          </Title>
          <Input placeholder="Digite o número da Lead" />
          <Button href="/confirm" className="w-full">
            Pesquisar Lead
          </Button>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex items-center justify-center">
          <LeadInfo
            lead={{
              number: lead.number,
              name: lead.name,
              description: lead.jobTitle,
            }}
          />
        </div>
      </div>
    </div>
  );
}
