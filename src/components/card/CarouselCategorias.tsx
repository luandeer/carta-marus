import { getCategorias } from '@/config/categorias'
import Image from 'next/image'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { CardCategories } from './CardCategories'

export function CarouselCategorias() {
  const menuCategorias = getCategorias()

  return (
    <>
      <Carousel
        opts={{
          align: 'start'
        }}
      >
        <div>
          <CarouselContent>
            {menuCategorias.map(({ nombre, icon: Icon, path }) => {
              return (
                <CarouselItem
                  key={nombre}
                  className="basis-1/2 whitespace-nowrap sm:basis-1/3 lg:basis-1/4"
                >
                  <CardCategories
                    nombre={nombre}
                    Icon={<Icon className="size-8 text-marusColor-marron" />}
                    path={path}
                  />
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </div>

        <CarouselPrevious
          className="-left-4 h-8 w-8 rounded-full border-none bg-marusColor-rojo text-marusColor-letras hover:bg-marusColor-rojo hover:text-marusColor-letras"
          size="icon"
          icon={<IoIosArrowBack className="size-4" />}
        />
        <CarouselNext
          className="-right-4 h-8 w-8 rounded-full border-none bg-marusColor-rojo text-marusColor-letras hover:bg-marusColor-rojo hover:text-marusColor-letras"
          size="icon"
          icon={<IoIosArrowForward className="size-4" />}
        />
      </Carousel>
    </>
  )
}
