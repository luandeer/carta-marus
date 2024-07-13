import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { getCategorias } from "@/config/categorias";
import { ActivarLinkCategoria } from "./active-link-categoria";
import { Separator } from "../ui/separator";
export function NavCategorias() {
  //obteniendo categorias
  const menuCategorias = getCategorias();
  return (
    <div className="flex-col mb-4">
      <h1 className="text-2xl lg:text-3xl font-bold text-marusColor-marron dark:text-gray-50 mb-5 hidden">Carta {`Maru's`}</h1>
      <div>
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {menuCategorias.map(({ nombre, icon:Icon, path }) => {
              return (
                <CarouselItem key={nombre} className="basis-auto">
                <ActivarLinkCategoria nombre={nombre} Icon={<Icon/>} path={path}/>
              </CarouselItem>
              );
            })}
           
          </CarouselContent>
          <CarouselPrevious className="-left-0    " />
          <CarouselNext className="-right-0    " />
        </Carousel>
      </div>

    </div>
  );
}