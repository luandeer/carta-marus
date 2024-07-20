"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store";
import { BsCart3 } from "react-icons/bs";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
export function Cart() {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  } = useCartStore();

  const handleCloseAutoFocus = (event: any) => {
    // esta funcion sirve para que cuando se cierra el modal, se mantenga en su posicion
    event.preventDefault();
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={toggleCart}>
      <SheetTrigger asChild>
        <Button className="bg-transparent border-none h-0 hover:bg-transparent relative px-0 ">
          {" "}
          <BsCart3 className="text-marusColor-letras size-5 sm:size-5" />
          {cartItems.length > 0 && <span className="absolute -top-2 -right-2 size-3 rounded-full p-1 mx-auto text-marusColor-marron bg-marusColor-anaranjado flex items-center justify-center text-[10px] animate-cart transition-transform duration-1000 ease-in">{cartItems.length}</span>}
        </Button>
      </SheetTrigger>
      <SheetContent
        onCloseAutoFocus={handleCloseAutoFocus}
        className="w-full"
      >
        <SheetHeader className="items-start text-start">
          <SheetTitle>Carrito de Compras</SheetTitle>
          <SheetDescription>
            Aquí puedes revisar y modificar los artículos en tu carrito.
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-2" />
        <div className="grid gap-4 py-4">
          {cartItems.length > 0 ? (
            cartItems.map((item: any, index: any) => (
              <div
                key={item.id}
                className="flex justify-between items-center gap-2"
              >
                <div className="flex items-center gap-2">
                  <div className="flex flex-col justify-center items-center gap-1">
                    <button
                      onClick={() => increaseQuantity(item.id)
                      }
                      className={cn("flex items-center justify-center w-6 h-6 rounded-lg p-1 bg-marusColor-anaranjado text-marusColor-marron text-lg cursor-pointer transition-colors duration-300 ease-in-out", {
                        "bg-gray-300 text-gray-500" : item.quantity >= 15,
                      })}
                      disabled={item.quantity === 15 || item.isLoading === 'increase'}

                    >
                      {item.isLoading === 'increase' ? <span className=" flex justify-center items-center   text-white w-full h-full transition ease-in duration-200 text-center">
                        <svg width="18" height="18" fill="currentColor" className="animate-spin p-[2px]" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                          </path>
                        </svg>
                      </span> : "+"}

                    </button>
                    <span className="text-xs font-medium">{item.quantity}</span>
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className={cn("flex items-center justify-center w-6 h-6 rounded-lg p-1 bg-marusColor-anaranjado text-marusColor-marron text-lg cursor-pointer transition-colors duration-300 ease-in-out", {
                        "bg-gray-300 text-gray-500" : item.quantity <= 1,
                      })}
                      disabled={item.quantity === 1 || item.isLoading === 'decrease'}
                    >
                      {item.isLoading === 'decrease' ? <span className=" flex justify-center items-center   text-white w-full h-full transition ease-in duration-200 text-center">
                        <svg width="18" height="18" fill="currentColor" className="animate-spin p-[2px]" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                          </path>
                        </svg>
                      </span> : "-"}
                    </button>
                  </div>
                  <Image
                    src={item.imagen}
                    alt={item.name}
                    className="object-cover rounded-xl shadow-lg w-[4.5rem] h-[4.5rem]"
                    width="700"
                    height="700"
                  />
                  <div className="flex flex-col items-start justify-start text-xs gap-1 font-medium">
                    <span>{item.name}</span>
                    <span>S/{item.price}</span>
                  </div>
                </div>

                
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                      <button onClick={() => removeFromCart(item.id)}>
                      {item.isLoading === 'remove' ? <span className=" flex justify-center items-center   text-red-500 w-full h-full transition ease-in duration-200 text-center">
                        <svg width="20" height="20" fill="currentColor" className="animate-spin p-[2px]" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                          <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                          </path>
                        </svg>
                      </span> : <MdDeleteOutline className="text-marusColor-rojo size-7" />}
                      </button>

                      </TooltipTrigger>
                      <TooltipContent className="py-1 bg-marusColor-rojo text-white" align="end" side="top">
                        <p className="text-xs">Borrar</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
              </div>
            ))
          ) : (
            <p>No hay ningún producto en el carrito.</p>
          )}
        </div>
        <Separator className="my-2" />
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">.......</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
