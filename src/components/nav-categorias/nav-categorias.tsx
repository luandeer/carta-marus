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
    <div className="py-3 container px-4 xl:px-2">
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