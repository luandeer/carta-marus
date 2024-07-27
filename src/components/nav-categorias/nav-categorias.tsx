import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { getCategorias } from '@/config/categorias'
import { ActivarLinkCategoria } from './active-link-categoria'

export function NavCategorias() {
  //obteniendo categorias
  const menuCategorias = getCategorias()
  return (
    <div className="container px-1 py-3">
      <div>
        <Carousel
          opts={{
            align: 'start'
          }}
        >
          <div className="mx-9 overflow-hidden">
            <CarouselContent>
              {menuCategorias.map(({ nombre, icon: Icon, path }) => {
                return (
                  <CarouselItem key={nombre} className="basis-auto">
                    <ActivarLinkCategoria nombre={nombre} Icon={<Icon />} path={path} />
                  </CarouselItem>
                )
              })}
            </CarouselContent>
          </div>

          <CarouselPrevious
            className="-left-0 h-6 w-6 rounded-lg bg-marusColor-rojo text-marusColor-letras hover:bg-marusColor-rojo hover:text-marusColor-letras"
            size="icon"
            icon={<IoIosArrowBack className="size-4" />}
          />
          <CarouselNext
            className="-right-0 h-6 w-6 rounded-lg bg-marusColor-rojo text-marusColor-letras hover:bg-marusColor-rojo hover:text-marusColor-letras"
            size="icon"
            icon={<IoIosArrowForward className="size-4" />}
          />
        </Carousel>
      </div>
    </div>
  )
}
