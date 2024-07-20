"use client"
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
        <Link href={`/categoria/${path}`} className={cn("flex items-center justify-center flex-row-reverse gap-2 rounded-xl border border-marusColor-marron w-40 shadow py-0.5 text-marusColor-marron transition-colors duration-300 ease-in-out hover:bg-orange-900 hover:text-white/90 hover:border-marusColor-marron", {
            'bg-marusColor-marron border-marusColor-marron text-marusColor-letras  transition-colors duration-300 ease-in-out': pathname.includes(`/categoria/${path}`)
        })}>
            <h1 className="whitespace-nowrap text-sm">{nombre}</h1>
            <div className="text-xl">
                {Icon}
            </div>
        </Link>
    );
}