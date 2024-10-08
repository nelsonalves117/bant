"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { Input } from "../components/Input";
import { LeadInfo } from "../components/LeadInfo";
import { useRouter, useSearchParams } from "next/navigation";

interface Lead {
  number: string;
  name: string;
  jobTitle: string;
}

async function fetchLeadData(leadNumber: string): Promise<Lead> {
  const response = await fetch(`/api/lead?id=${leadNumber}`);
  const text = await response.text();

  const data = JSON.parse(text);

  if (response.status !== 200) {
    throw new Error(data.error || "Failed to fetch lead data");
  }

  return data;
}

export default function Home() {
  const [lead, setLead] = useState<Lead>({
    number: "",
    name: "",
    jobTitle: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const leadNumber = searchParams.get("id");

    if (leadNumber) {
      setLoading(true);
      fetchLeadData(leadNumber)
        .then((data) => {
          setLead(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError(err.message);
          setLoading(false);
        });
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      router.push(`?id=${inputValue}`);
    }
  };

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
          <form onSubmit={handleFormSubmit} className="w-full ml-40">
            <Input
              placeholder="Digite o número da Lead"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button type="submit" className="w-full mt-4">
              Pesquisar Lead
            </Button>
          </form>
        </div>
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex items-center justify-center">
          <LeadInfo
            lead={{
              number: lead.number,
              name: lead.name,
              description: lead.jobTitle,
            }}
            loading={loading}
          />
        </div>
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}
