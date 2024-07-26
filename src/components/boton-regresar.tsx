"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

export function BotonRegresar() {
  const router = useRouter();

  return (
    <Button
      variant="link"
      className="text-dashboard-fondo flex h-8 items-center gap-1 p-0 text-xs"
      onClick={() => {
        router.back();
      }}
    >
      <IoArrowBack size={15} />
      Volver
    </Button>
  );
}
