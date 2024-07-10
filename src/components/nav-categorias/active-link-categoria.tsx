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
        <Link href={`/categoria/${path}`} className={cn("flex items-center justify-center flex-col-reverse rounded-2xl border border-red-300 w-24 shadow px-2 py-0.5 text-red-400 transition-colors duration-300 ease-in-out hover:bg-red-300 hover:text-white/90 hover:border-red-100", {
            'bg-gradient-to-r from-rose-400 to-red-500 text-white border-red-400 transition-colors duration-300 ease-in-out': pathname === `/categoria/${path}`
        })}>
            <h1 className="whitespace-nowrap pb-2  text-sm">{nombre}</h1>
            <div className="  pt-2 pb-1  mx-auto text-3xl">
                {Icon}
            </div>
        </Link>
    );
}