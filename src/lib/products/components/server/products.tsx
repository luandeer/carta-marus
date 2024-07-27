'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MdDeliveryDining } from 'react-icons/md'
import { FiltroSelect } from './filtroSelect'
import { useState } from 'react'
export function Products({ dataProductos, categoria }: any) {
  const [sortOption, setSortOption] = useState('default') // Para demostración; si no quieres usar estado, usa un método alternativo

  // Función para ordenar productos
  const sortProducts = (products: any[], option: string) => {
    switch (option) {
      case 'priceAsc':
        return products.slice().sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio))
      case 'priceDesc':
        return products.slice().sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio))
      // Puedes agregar más casos para otros criterios de ordenamiento
      default:
        return products
    }
  }
  const sortedProducts = sortProducts(dataProductos, sortOption)
  return (
    <>
      <div className="mb-2 flex items-center justify-between">
        <div className="text-sm font-semibold capitalize text-marusColor-marron lg:text-base">
          {categoria.replace(/-/g, ' ')}{' '}
          <span className="text-xs font-normal text-marusColor-marron/50">
            ({dataProductos.length} platos)
          </span>
        </div>
        <FiltroSelect sortOption={sortOption} setSortOption={setSortOption} />
      </div>
      <section className="grid grid-cols-2 gap-x-1.5 gap-y-1.5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {sortedProducts.map((producto: any) => {
          return (
            <article key={producto.id} className="relative max-w-full">
              <div className="absolute left-2 top-2 z-10 flex gap-1">
                <div className="hidden rounded-br-lg rounded-tl-lg bg-marusColor-anaranjado px-2 py-1 text-xs font-bold text-white">
                  20% dscto.
                </div>
                {producto.nuevoProducto && (
                  <span className="rounded-br-lg rounded-tl-lg bg-gradient-to-r from-lime-400 to-lime-500 px-2 py-1 text-xs font-bold capitalize text-white">
                    ¡{producto.nuevoProducto}!
                  </span>
                )}
              </div>

              <Link href={`/products/${producto.id}`}>
                <div className="group aspect-square h-fit overflow-hidden rounded-t-2xl bg-marusColor-marron">
                  <Image
                    src={producto.imagenes?.[0]?.urls?.[0]}
                    alt={producto.nombre}
                    className="w-auto object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
                    width="200"
                    height="200"
                    loading="lazy"
                  />
                </div>
              </Link>

              <div className="min-h-[7.5rem] bg-marusColor-anaranjado px-4 py-2">
                <h2 className="text-md truncate font-bold">{producto.nombre}</h2>
                <div className="my-1 text-xs text-marusColor-marron">
                  <p className="truncate">{producto.descripcion}</p>
                </div>
                <ul className="my-1 hidden flex-col items-start">
                  <li className="flex items-center gap-2">
                    <MdDeliveryDining className="size-4" />

                    <p className="text-xs text-marusColor-marron dark:text-gray-400">
                      Delivery rápido
                    </p>
                  </li>
                </ul>
                <div className="flex items-center gap-2 font-medium">
                  {producto.descuento && (
                    <div className="flex flex-col py-1">
                      <div className="flex items-center gap-x-2">
                        S/
                        {(
                          parseFloat(producto.precio) -
                          (parseFloat(producto.precio) * parseFloat(producto.descuento)) / 100
                        ).toFixed(2)}{' '}
                        <span className="w-min whitespace-nowrap rounded-lg bg-marusColor-rojo px-2 py-0.5 text-xs text-white">
                          -{producto.descuento}%
                        </span>
                      </div>
                      <span className="text-sm line-through">
                        S/{parseFloat(producto.precio).toFixed(2)}
                      </span>
                    </div>
                  )}
                  {!producto.descuento && (
                    <span className="font-medium">S/{parseFloat(producto.precio).toFixed(2)}</span>
                  )}
                </div>
              </div>
              <Link
                href={`/products/${producto.id}`}
                className="flex items-center justify-center rounded-bl-2xl rounded-br-2xl bg-marusColor-rojo py-1 text-sm text-white hover:bg-red-500"
              >
                Ver Producto
              </Link>
            </article>
          )
        })}
      </section>
    </>
  )
}
