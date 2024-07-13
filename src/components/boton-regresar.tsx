"use client"
import { useRouter } from 'next-nprogress-bar';
import { Button } from "@/components/ui/button"
import { IoArrowBack } from "react-icons/io5";

export function BotonRegresar() {
    const router = useRouter();

  return (
    <Button variant="link" className="p-0 flex items-center h-8 text-xs gap-1 text-dashboard-fondo" onClick={() => { router.back()}}><IoArrowBack size={15}/>Volver</Button>
  );
}