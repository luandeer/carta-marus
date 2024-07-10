

import Link from "next/link";

export default function NotFound() {

    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen">
            <span className="bg-gradient-to-b from-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
                404
            </span>
            <h2 className="my-2 font-heading text-2xl font-bold">
            Página no encontrada
            </h2>
            <p>

                Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
            <div className="mt-8 flex justify-center gap-2">
                
                <Link
                    href="/"
                    className=" hover:underline hover:underline-offset-4"
                >
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
}