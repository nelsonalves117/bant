import Image from "next/image";
import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { Input } from "../components/Input";

export default function Home() {
  return (
    <div className="bg-mamba-bg flex items-center justify-center min-h-screen flex-col p-4">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center gap-4">
        <div className="w-full flex justify-center mb-[5rem]">
          <Image src="/logo.png" alt="Logo" width={350} height={350} quality={100} />
        </div>
        <Title marginTop="-15rem" marginBottom="3rem">
          Encontre a lead
        </Title>
        <Input placeholder="Digite o número da Lead" />
        <Button className="w-full">Pesquisar Lead Lead</Button>
        <Button href="/main" className="w-full">
          Avançar
        </Button>
      </div>
    </div>
  );
}
