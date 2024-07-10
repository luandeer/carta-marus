import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { getCategorias } from "@/config/categorias";
import { ActivarLinkCategoria } from "./active-link-categoria";
export function NavCategorias() {
  //obteniendo categorias
  const menuCategorias = getCategorias();
  return (
    <div className="grid grid-cols-1 justify-start items-center w-full">
      <h1 className="text-2xl lg:text-4xl font-bold text-marusColor-marron dark:text-gray-50 mb-5 ">Bienvenido(a) a {`Maru's`}</h1>
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className=" "
        >
          <CarouselContent>
            {menuCategorias.map(({ nombre, icon:Icon, path }) => {
              return (
                <CarouselItem key={nombre} className="basis-auto ">
                <ActivarLinkCategoria nombre={nombre} Icon={<Icon/>} path={path}/>
              </CarouselItem>
              );
            })}
           
          </CarouselContent>
          <CarouselPrevious className="-left-0" />
          <CarouselNext className="-right-0" />
        </Carousel>
      </div>
    </div>
  );
}