import Image from "next/image";
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
import { MdDeliveryDining } from "react-icons/md";

export function Productos({ dataProductos, path }: any) {
  return (
    <>
      <div className="flex items-center justify-between  text-marusColor-marron  rounded-xl mb-2">
        <BotonRegresar />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="text-marusColor-marron hover:text-yellow-900 "
                >
                  <FaHome size={14} />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-marusColor-marron" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-marusColor-marron font-semibold text-xs">
                {path}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-3">
        {dataProductos.map((producto: any) => {
          return (
            <article key={producto.id} className=" relative max-w-full ">
              <div className="absolute top-2 left-2 flex gap-1 z-10">
                <div className="bg-marusColor-anaranjado text-white px-2 py-1 text-xs font-bold rounded-br-lg  rounded-tl-lg hidden">
                  20% dscto.
                </div>
                {producto.nuevoProducto && (
                  <span className="bg-gradient-to-r from-lime-400  to-lime-500 text-white px-2 py-1 text-xs font-bold rounded-br-lg rounded-tl-lg  capitalize">
                    ¡{producto.nuevoProducto}!
                  </span>
                )}
              </div>

              <Link href={`/categoria/${producto.categoria}/${producto.id}`}>
                <div className="overflow-hidden rounded-t-2xl group">
                  <Image
                    src={producto.imagenes?.[0]?.urls?.[0]}
                    alt={producto.nombre}
                    className="w-auto transition-transform duration-300 ease-in-out group-hover:scale-105 object-center object-cover"
                    width="200"
                    height="200"
                    loading="lazy"
                  />
                </div>

              </Link>

              <div className=" bg-marusColor-anaranjado px-4 py-2 min-h-[7.5rem]">
                <h2 className="font-bold text-md truncate">{producto.nombre}</h2>
                <div className="text-xs  text-marusColor-marron  my-1">
                  <p className=" truncate">{producto.descripcion}</p>
                </div>
                <ul className="my-1 hidden flex-col items-start ">
                  <li className="flex items-center gap-2">
                    <MdDeliveryDining className="size-4" />

                    <p className="text-xs  text-marusColor-marron dark:text-gray-400">
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
                          (parseFloat(producto.precio) *
                            parseFloat(producto.descuento)) /
                          100
                        ).toFixed(2)}{" "}
                        <span className="bg-marusColor-rojo w-min whitespace-nowrap text-white px-2 py-0.5 text-xs rounded-lg">
                          -{producto.descuento}%
                        </span>
                      </div>
                      <span className="line-through text-sm">
                        S/{parseFloat(producto.precio).toFixed(2)}
                      </span>
                    </div>
                  )}
                  {!producto.descuento && (
                    <span className="font-medium ">
                      S/{parseFloat(producto.precio).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
              <Link
                href={`/categoria/${producto.categoria}/${producto.id}`}
                className="flex items-center py-1 text-white justify-center text-sm bg-marusColor-rojo hover:bg-red-500 rounded-br-2xl rounded-bl-2xl"
              >
                Ver Producto
              </Link>
            </article>
          )
        })}
      </section>
    </>
  );
}
