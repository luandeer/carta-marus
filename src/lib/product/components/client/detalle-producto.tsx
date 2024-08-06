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
import { BsCartCheck, BsCartDash, BsCartPlus } from 'react-icons/bs'

export function DetalleProducto({ dataProducto }: any) {
  const { addToCart, removeFromCart, cartItems } = useCartStore((state) => ({
    addToCart: state.addToCart,
    removeFromCart: state.removeFromCart,
    cartItems: state.cartItems
  }))
  const [isInCart, setIsInCart] = React.useState(false)
  React.useEffect(() => {
    const itemInCart = cartItems.find((item) => item.id === dataProducto.id)
    setIsInCart(!!itemInCart)
  }, [cartItems, dataProducto.id])
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
    setIsInCart(true)
  }

  const handleRemoveFromCart = (itemId: any) => {
    removeFromCart(itemId)
    setIsInCart(false)
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
              {/* <div className="hidden w-full items-center gap-3 text-lg font-medium">
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
              </div> */}

              <Button
                className="hover:text-primary-700 flex h-9 w-full items-center justify-center rounded-xl border border-gray-200 bg-marusColor-rojo px-5 text-sm font-medium text-marusColor-letras hover:bg-marusColor-rojo focus:z-10 focus:outline-none"
                onClick={() =>
                  isInCart ? handleRemoveFromCart(dataProducto.id) : handleAddToCart(dataProducto)
                }
              >
                {isInCart ? (
                  <>
                    <BsCartDash size={20} className="mr-2" />
                    Quitar del carrito
                  </>
                ) : (
                  <>
                    <BsCartPlus size={20} className="mr-2" />
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
