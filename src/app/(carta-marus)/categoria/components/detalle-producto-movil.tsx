"use client"
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
import { useCartStore } from "@/store";

export function DetalleProducto({ dataProducto }: any) {
  const { addToCart, cartItems } = useCartStore(state => ({
    addToCart: state.addToCart,
    cartItems: state.cartItems,
  }));

  const itemLoading = cartItems.find(item => item.id === dataProducto.id)?.isLoading;

  //son variables para el carrusel
  const OPTIONS: any = {}
  const SLIDES = dataProducto.imagenes[0]?.urls

  const handleAddToCart = (item: any) => {
    const { nombre, descuento, precio, id, imagenes } = item
    addToCart({ id: id, descuento: descuento, name: nombre, price: precio, imagen: imagenes?.[0]?.urls?.[0] });
  };

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


            <div className="mt-4 items-center justify-between sm:gap-4 flex flex-row-reverse">
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
              <div className="hidden items-center gap-3 text-lg font-medium w-full">
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

              <Button
                className="flex items-center justify-center h-9 w-full px-5 text-sm font-medium text-marusColor-letras focus:outline-none bg-marusColor-rojo rounded-xl border border-gray-200 hover:bg-marusColor-rojo hover:text-primary-700 focus:z-10 "
                onClick={() => handleAddToCart(dataProducto)}
              >
                {itemLoading === "add"? <span className=" flex justify-center items-center   text-white w-full transition ease-in duration-200 text-center">
                  <svg width="18" height="18" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                    </path>
                  </svg>
                  Agregando
                </span> : <><IoCartOutline size={20} className="mr-2" />
                  Agregar al carrito</>}

              </Button>
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
