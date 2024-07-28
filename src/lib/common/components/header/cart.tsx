'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { useCartStore } from '@/store'
import Image from 'next/image'
import { MdDeleteOutline } from 'react-icons/md'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Separator } from '@/components/ui/separator'
import { ShoppingCartIcon } from 'lucide-react'
export function Cart() {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCartStore()

  const handleCloseAutoFocus = (event: any) => {
    // esta funcion sirve para que cuando se cierra el modal, se mantenga en su posicion
    event.preventDefault()
  }

  return (
    <Sheet open={isCartOpen} onOpenChange={toggleCart}>
      <SheetTrigger asChild>
        <Button className="relative h-0 rounded-lg border-none bg-[#FBA5001F] px-2 py-3 font-normal hover:bg-[#FBA5001F]/20">
          <ShoppingCartIcon className="size-4 text-marusColor-letras" />
          {cartItems.length > 0 && (
            <span className="absolute -right-1 -top-1 mx-auto flex size-3 animate-cart items-center justify-center rounded-full bg-marusColor-anaranjado p-1 text-[10px] text-marusColor-marron transition-transform duration-1000 ease-in">
              {cartItems.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent onCloseAutoFocus={handleCloseAutoFocus} className="bg-[#FAF6ED]">
        <SheetHeader className="items-start text-start">
          <SheetTitle>
            Carrito de Compras{' '}
            {cartItems.length > 0 && (
              <span className="size-3 text-marusColor-marron">({cartItems.length})</span>
            )}
          </SheetTitle>
          <SheetDescription>
            Aquí puedes revisar y modificar los artículos en tu carrito.
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-2" />
        <div className="grid gap-4 py-4">
          {cartItems.length > 0 ? (
            cartItems.map((item: any, index: any) => (
              <div key={item.id} className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col items-center justify-center gap-1">
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className={cn(
                        'flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-marusColor-anaranjado p-1 text-lg text-marusColor-marron transition-colors duration-300 ease-in-out',
                        {
                          'bg-gray-300 text-gray-500': item.quantity >= 15
                        }
                      )}
                      disabled={item.quantity === 15 || item.isLoading === 'increase'}
                    >
                      {item.isLoading === 'increase' ? (
                        <span className="flex h-full w-full items-center justify-center text-center text-white transition duration-200 ease-in">
                          <svg
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="animate-spin p-[2px]"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                          </svg>
                        </span>
                      ) : (
                        '+'
                      )}
                    </button>
                    <span className="text-xs font-medium">{item.quantity}</span>
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className={cn(
                        'flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-marusColor-anaranjado p-1 text-lg text-marusColor-marron transition-colors duration-300 ease-in-out',
                        {
                          'bg-gray-300 text-gray-500': item.quantity <= 1
                        }
                      )}
                      disabled={item.quantity === 1 || item.isLoading === 'decrease'}
                    >
                      {item.isLoading === 'decrease' ? (
                        <span className="flex h-full w-full items-center justify-center text-center text-white transition duration-200 ease-in">
                          <svg
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="animate-spin p-[2px]"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                          </svg>
                        </span>
                      ) : (
                        '-'
                      )}
                    </button>
                  </div>
                  <Image
                    src={item.imagen}
                    alt={item.name}
                    className="h-[4.5rem] w-[4.5rem] rounded-xl object-cover shadow-lg"
                    width="700"
                    height="700"
                  />
                  <div className="flex flex-col items-start justify-start gap-1 text-xs font-medium">
                    <span>{item.name}</span>
                    <span>S/{item.price}</span>
                  </div>
                </div>

                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <button onClick={() => removeFromCart(item.id)}>
                        {item.isLoading === 'remove' ? (
                          <span className="flex h-full w-full items-center justify-center text-center text-red-500 transition duration-200 ease-in">
                            <svg
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="animate-spin p-[2px]"
                              viewBox="0 0 1792 1792"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                            </svg>
                          </span>
                        ) : (
                          <MdDeleteOutline className="size-7 text-marusColor-rojo" />
                        )}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="bg-marusColor-rojo py-1 text-white"
                      align="end"
                      side="top"
                    >
                      <p className="text-xs">Borrar</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <ShoppingCartIcon className="h-12 w-12 text-muted-foreground" />
              <h2 className="text-base font-bold">No hay productos agregados</h2>
              <p className="text-sm text-muted-foreground">
                Agrega algunos productos a tu carrito para comenzar.
              </p>
            </div>
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
  )
}
