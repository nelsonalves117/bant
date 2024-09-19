import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import ParentCard from "../../components/ParentCard";

export default function Main() {
  return (
    <div className="bg-mamba-bg flex items-center justify-center min-h-screen flex-col">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center gap-4 mb-4 relative">
        <Title fontSize="2rem">FORMULÁRIO PRELIMINAR</Title>
        <div className="mt-2">
          <ParentCard />
        </div>
        <Button href="/bant" className="absolute bottom-0 transform translate-y-1/2">
          Iniciar BANT
        </Button>
      </div>
    </div>
  );
}
