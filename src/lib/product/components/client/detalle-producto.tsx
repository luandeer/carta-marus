'use client'
import * as React from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { BotonRegresar } from '@/components'
import { FaHome } from 'react-icons/fa'
import { MdDeliveryDining } from 'react-icons/md'
import { GrMoney } from 'react-icons/gr'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store'
import { CarruselImagenes, CarruselMovil } from '@/lib/product/components'
import { ShoppingCartIcon } from 'lucide-react'

export function DetalleProducto({ dataProducto }: any) {
  const { addToCart, cartItems } = useCartStore((state) => ({
    addToCart: state.addToCart,
    cartItems: state.cartItems
  }))

  const itemLoading = cartItems.find((item) => item.id === dataProducto.id)?.isLoading

  //son variables para el carrusel
  const OPTIONS: any = {}
  const SLIDES = dataProducto.imagenes[0]?.urls

  const handleAddToCart = (item: any) => {
    const { nombre, descuento, precio, id, imagenes } = item
    addToCart({
      id: id,
      descuento: descuento,
      name: nombre,
      price: precio,
      imagen: imagenes?.[0]?.urls?.[0]
    })
  }

  return (
    <section className="container px-0 pt-3 lg:px-2">
      <div className="mb-2 flex items-center justify-between rounded-xl text-marusColor-marron">
        <BotonRegresar />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="text-marusColor-marron hover:text-yellow-900">
                  <FaHome size={14} />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-marusColor-marron" />

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/categoria/${dataProducto.categoria}`}
                  className="text-xs capitalize text-marusColor-marron hover:text-yellow-900"
                >
                  {dataProducto.categoria}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-marusColor-marron" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xs font-semibold text-marusColor-marron">
                {dataProducto.nombre}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="mx-auto">
        <div className="gap-8 lg:grid lg:grid-cols-2">
          <div className="mx-auto shrink-0">
            <div className="hidden lg:block">
              <CarruselImagenes slides={SLIDES} options={OPTIONS} />
            </div>
            <div className="block lg:hidden">
              <CarruselMovil slides={SLIDES} options={OPTIONS} />
            </div>
          </div>

          <div className="mt-6 px-4 sm:mt-4 lg:mt-0">
            {dataProducto.nuevoProducto && (
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-br-lg rounded-tl-lg bg-gradient-to-r from-lime-400 to-lime-500 px-2 py-1 text-xs capitalize text-white">
                  ¡{dataProducto.nuevoProducto}!
                </span>
                <div className="flex w-min items-center gap-1 whitespace-nowrap rounded-br-lg rounded-tl-lg bg-marusColor-anaranjado px-2 py-1 text-xs capitalize text-white">
                  <MdDeliveryDining className="size-4" />

                  <p>Delivery</p>
                </div>
              </div>
            )}
            {!dataProducto.nuevoProducto && (dataProducto.descuento || !dataProducto.descuento) && (
              <div className="mb-3 flex w-min items-center gap-1 whitespace-nowrap rounded-br-lg rounded-tl-lg bg-marusColor-anaranjado px-2 py-1 text-xs capitalize text-white">
                <MdDeliveryDining className="size-4" />

                <p>Delivery</p>
              </div>
            )}

            <h1 className="mb-1 text-xl font-bold text-marusColor-marron dark:text-white sm:text-2xl">
              {dataProducto.nombre}
            </h1>

            <blockquote className="text-sm italic text-gray-900 dark:text-white">
              <p>{dataProducto.frase}</p>
            </blockquote>

            <div className="mt-4 flex flex-row-reverse items-center justify-between sm:gap-4">
              <div className="flex items-center gap-2">
                <GrMoney className="size-4" />
                <p className="text-sm text-marusColor-marron dark:text-gray-400">Precio online</p>
              </div>

              {dataProducto.descuento && (
                <div className="flex items-center gap-x-2 py-1">
                  <span className="text-lg font-medium">
                    {' '}
                    S/
                    {(
                      parseFloat(dataProducto.precio) -
                      (parseFloat(dataProducto.precio) * parseFloat(dataProducto.descuento)) / 100
                    ).toFixed(2)}{' '}
                  </span>
                  <span className="w-min whitespace-nowrap rounded-lg bg-marusColor-rojo px-2 py-0.5 text-xs text-white">
                    -{dataProducto.descuento}%
                  </span>
                </div>
              )}

              {!dataProducto.descuento && (
                <span className="text-lg font-medium">
                  S/{parseFloat(dataProducto.precio).toFixed(2)}
                </span>
              )}
            </div>
            {dataProducto.descuento && (
              <span className="flex items-center justify-start text-sm line-through">
                S/{parseFloat(dataProducto.precio).toFixed(2)}
              </span>
            )}

            <div className="mt-6 space-y-3 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:space-y-0">
              <div className="hidden w-full items-center gap-3 text-lg font-medium">
                <h1 className="text-sm">Cantidad:</h1>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-9 w-full rounded-xl border border-marusColor-anaranjado bg-transparent text-2xl text-marusColor-anaranjado"
                >
                  -
                </Button>
                <span className="text-marusColor-anaranjado">1</span>
                <Button
                  size="icon"
                  variant="outline"
                  className="h-9 w-full rounded-xl border border-marusColor-anaranjado bg-transparent text-2xl text-marusColor-anaranjado"
                >
                  +
                </Button>
              </div>

              <Button
                className="hover:text-primary-700 flex h-9 w-full items-center justify-center rounded-xl border border-gray-200 bg-marusColor-rojo px-5 text-sm font-medium text-marusColor-letras hover:bg-marusColor-rojo focus:z-10 focus:outline-none"
                onClick={() => handleAddToCart(dataProducto)}
              >
                {itemLoading === 'add' ? (
                  <span className="flex w-full items-center justify-center text-center text-white transition duration-200 ease-in">
                    <svg
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="mr-2 animate-spin"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                    </svg>
                    Agregando
                  </span>
                ) : (
                  <>
                    <ShoppingCartIcon size={20} className="mr-2" />
                    Agregar al carrito
                  </>
                )}
              </Button>
            </div>

            {dataProducto.descripcion && (
              <>
                <Separator className="my-6 bg-marusColor-marron" />

                <h1 className="mb-2 text-lg font-semibold">¿Qué incluye este producto?</h1>
                <p className="mb-6 text-marusColor-marron dark:text-gray-400">
                  {dataProducto.descripcion}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
