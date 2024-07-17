import * as React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BotonRegresar } from "@/components";
import { FaHome } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import CarruselImagenes from "./carrusel/carrusel";
export function DetalleProducto({ dataProducto }: any) {
  //son variables para el carrusel
  const OPTIONS: any = {}
  const SLIDES = dataProducto.imagenes[0]?.urls
  return (
    <section>
      <div className="flex items-center justify-between bg-marusColor-marron text-marusColor-letras px-4 rounded-xl mb-4">
        <BotonRegresar />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="text-marusColor-letras hover:text-white "
                >
                  <FaHome size={14} />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-marusColor-letras" />

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/categoria/${dataProducto.categoria}`}
                  className="text-marusColor-letras hover:text-white text-xs"
                >
                  {dataProducto.categoria}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-marusColor-letras" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-marusColor-letras font-semibold text-xs">
                {dataProducto.nombre}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className=" mx-auto">
        <div className="lg:grid lg:grid-cols-2 gap-8">

          <div className="shrink-0 mx-auto">
          <CarruselImagenes slides={SLIDES} options={OPTIONS} />
          
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            {dataProducto.nuevoProducto && (
              <div className="mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-lime-400 to-lime-500 text-white px-2 py-1 text-xs  rounded-br-lg rounded-tl-lg  capitalize">
                  ¡{dataProducto.nuevoProducto}!
                </span>
                <div className=" w-min whitespace-nowrap flex items-center gap-1  bg-marusColor-anaranjado text-white px-2 py-1 text-xs rounded-br-lg rounded-tl-lg  capitalize">
              <MdDeliveryDining className="size-4" />

              <p>
                Delivery
              </p>
            </div>
              </div>
            )}
            {(!dataProducto.nuevoProducto && (dataProducto.descuento || !dataProducto.descuento)) && (<div className=" w-min mb-3 whitespace-nowrap flex items-center gap-1  bg-marusColor-anaranjado text-white px-2 py-1 text-xs rounded-br-lg rounded-tl-lg  capitalize">
              <MdDeliveryDining className="size-4" />

              <p>
                Delivery
              </p>
            </div>)}
            
            

            <h1 className="text-xl mb-1 font-bold text-marusColor-marron sm:text-2xl dark:text-white">
              {dataProducto.nombre}
            </h1>

            <blockquote className="text-sm italic  text-gray-900 dark:text-white">
              <p>{dataProducto.frase}</p>
            </blockquote>


            <div className="mt-4 sm:items-center sm:justify-between sm:gap-4 sm:flex sm:flex-row-reverse">
              <div className="flex items-center gap-2">
                <GrMoney className="size-4" />
                <p className="text-sm  text-marusColor-marron dark:text-gray-400">
                  Precio online
                </p>
              </div>


              {dataProducto.descuento && (
                <div className="flex items-center gap-x-2 py-1">
                  <span className="text-lg font-medium">
                    {" "}
                    S/
                    {(
                      parseFloat(dataProducto.precio) -
                      (parseFloat(dataProducto.precio) *
                        parseFloat(dataProducto.descuento)) /
                      100
                    ).toFixed(2)}{" "}
                  </span>
                  <span className="bg-marusColor-rojo w-min whitespace-nowrap text-white px-2 py-0.5 text-xs rounded-lg">
                    -{dataProducto.descuento}%
                  </span>
                </div>
              )}


              {!dataProducto.descuento && (
                <span className="font-medium text-lg">
                  S/{parseFloat(dataProducto.precio).toFixed(2)}
                </span>
              )}

            </div>
            {dataProducto.descuento && (<span className="line-through text-sm flex items-center justify-start">
              S/{parseFloat(dataProducto.precio).toFixed(2)}
            </span>)}


            <div className="mt-6 space-y-3 sm:space-y-0 sm:gap-4 sm:items-center sm:justify-between sm:flex ">
              <div className="flex items-center gap-3 text-lg font-medium w-full">
                <h1 className="text-sm">Cantidad:</h1>
                <Button
                  size="icon"
                  variant="outline"
                  className="  text-2xl h-9 w-full border border-marusColor-anaranjado bg-transparent rounded-xl text-marusColor-anaranjado"
                >
                  -
                </Button>
                <span className="text-marusColor-anaranjado">1</span>
                <Button
                  size="icon"
                  variant="outline"
                  className="  text-2xl h-9  w-full rounded-xl border border-marusColor-anaranjado bg-transparent text-marusColor-anaranjado"
                >
                  +
                </Button>
              </div>

              <Link
                href="#"
                title=""
                className="flex items-center justify-center h-9 w-full px-5 text-sm font-medium text-marusColor-letras focus:outline-none bg-marusColor-rojo rounded-xl border border-gray-200 hover:bg-marusColor-rojo hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <IoCartOutline size={20} className="mr-2" />
                Agregar al carrito
              </Link>
            </div>

            <Separator className="my-6  bg-marusColor-marron" />

            <h1 className="text-lg font-semibold mb-2">¿Qué incluye este producto?</h1>
            <p className="mb-6 text-marusColor-marron dark:text-gray-400">
              {dataProducto.descripcion}
            </p>

            <p className="text-marusColor-marron dark:text-gray-400 hidden">
              Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
              Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
              Magic Keyboard or Magic Keyboard with Touch ID.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
