import { NavCategorias } from '@/components'
import { CarouselCategorias } from '@/components/card/CarouselCategorias'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import BannerCarrusel from '@/lib/home/components/BannerSlider'
import HeaderHome from '@/lib/home/components/Header'
import { Badge } from 'lucide-react'
import { Utensils } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const OPTIONS: any = { loop: true, duration: 30 }

  return (
    <div className="container mt-4 px-0">
      {/* <BannerCarrusel slides={SLIDES} options={OPTIONS} /> */}
      {/* <HeaderHome /> */}

      <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 py-8 drop-shadow-md lg:py-0">
        {/* Patrón de fondo */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="flex h-full w-full flex-row-reverse items-center justify-between px-8 xl:px-12">
          <Image
            src="/marusfoto.png"
            alt="Deliciosa comida de Marus"
            className="z-0 hidden h-full w-full object-cover xl:block"
            width={400}
            height={400}
          />

          {/* Texto */}
          <div className="z-0 flex w-full flex-col items-start text-start">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-white drop-shadow-lg max-sm:text-center xl:text-6xl">
              ¡Bienvenid@s a Marus Brasa!
            </h1>
            {/* <p className="mb-6 text-3xl text-yellow-100 drop-shadow-md">
              Donde cada bocado cuenta una historia
            </p> */}
            <p className="mb-8 max-w-md text-base text-yellow-100 max-sm:text-center lg:text-xl">
              Explora nuestra exquisita selección de platos, preparados con pasión y los
              ingredientes más frescos.
            </p>
            <Link
              href="/categoria/brasa-familiar"
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-1 text-orange-500 transition-colors duration-300 hover:bg-yellow-100 hover:text-orange-600 max-sm:mx-auto"
            >
              Ir a Catálogo
              <Utensils className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <section className="py-8">
        <div className="text-marusColor-marron">
          <h2 className="mb-4 text-start text-2xl font-bold leading-tight">
            ¿Cómo funciona el delivery?
          </h2>
          <div className="flex w-full gap-4 max-lg:flex-wrap lg:flex-1">
            {[
              {
                title: 'Elige tus platos',
                description: 'Explora nuestro carta y agrega tus platos favoritos al carrito.'
              },
              {
                title: 'Agrega tu dirección',
                description:
                  'Ingresa tu dirección una sola vez o continúa sin ella, como prefieras.'
              },
              {
                title: 'Envía tu pedido',
                description:
                  'Confirma tu orden y envíala a nuestro WhatsApp. ¡Nos encargamos del resto!'
              }
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-lg border border-marusColor-marron/20 bg-transparent px-6 py-4"
              >
                <span className="mb-2 grid aspect-square h-10 w-10 place-content-center rounded-full bg-marusColor-anaranjado p-1 text-xl text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-sm font-medium capitalize text-marusColor-marron lg:text-base">
                    ¡{step.title}!
                  </h3>
                  <p className="text-xs text-marusColor-marron/50 lg:text-sm">
                    {' '}
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mb-8 flex flex-col gap-2">
        <div className="mb-1">
          <h2 className="mb-0.5 text-2xl font-bold text-marusColor-marron">Categorías </h2>
          <p className="text-sm leading-tight text-marusColor-marron/50">
            Descubre una carta diverso lleno de sabores frescos y deliciosos para cada ocasión.
          </p>
        </div>
        <CarouselCategorias />
      </div>
    </div>
  )
}
