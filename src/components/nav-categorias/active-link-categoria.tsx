"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface Categoria {
  nombre: string;
  Icon: any;
  path?: any;
}
export function ActivarLinkCategoria({ nombre, Icon, path }: Categoria) {
  const pathname = usePathname();
  return (
    <Link
      href={`/categoria/${path}`}
      className={cn(
        "flex w-40 flex-row-reverse items-center justify-center gap-2 rounded-lg py-0.5 text-marusColor-marron/80 transition-colors duration-300 ease-in-out hover:text-marusColor-rojo",
        {
          "bg-marusColor-rojo text-white transition-colors duration-300 ease-in-out hover:bg-marusColor-rojo hover:text-white":
            pathname.includes(`/categoria/${path}`),
        },
      )}
    >
      <h1 className="whitespace-nowrap text-sm">{nombre}</h1>
      <div className="text-xl">{Icon}</div>
    </Link>
  );
}
