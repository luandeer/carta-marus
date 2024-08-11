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
import { ScrollArea } from '@/components/ui/scroll-area'
import { useState } from 'react'
import ProcesoCompra from '@/lib/cart/process'
export function Cart() {
  const { cartItems, isCartOpen, toggleCart, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCartStore()
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false)
  const handleCheckout = () => {
    setIsCheckoutVisible(true)
  }

  return (
    <>
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
        {/* bg-[#FAF6ED] */}
        <SheetContent className="w-full">
          <ScrollArea className="h-full w-full pb-10 pr-3">
            {!isCheckoutVisible && (
              <>
                <SheetHeader className="sticky top-0 items-start bg-white text-start">
                  <SheetTitle>
                    Carrito de Compras{' '}
                    {cartItems.length > 0 && (
                      <span className="size-3 text-marusColor-marron">({cartItems.length})</span>
                    )}
                  </SheetTitle>
                  <SheetDescription>
                    Aquí puedes revisar y modificar los artículos en tu carrito.
                  </SheetDescription>
                  <Separator className="my-2" />
                </SheetHeader>

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
                              +
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
                              -
                            </button>
                          </div>
                          <Image
                            src={item.imagen}
                            alt={item.name}
                            className="h-[4.5rem] w-[4.5rem] rounded-xl object-cover shadow-lg"
                            width="700"
                            height="700"
                          />
                          <div className="flex flex-col items-start justify-start gap-1 text-sm font-medium">
                            <span>{item.name}</span>
                            <span>S/{item.price}</span>
                          </div>
                        </div>

                        <TooltipProvider>
                          <Tooltip delayDuration={0}>
                            <TooltipTrigger asChild>
                              <button onClick={() => removeFromCart(item.id)}>
                                <MdDeleteOutline className="size-7 text-marusColor-rojo" />
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
                <SheetFooter className="absolute bottom-0 left-0 z-50 w-full bg-white">
                  <Button onClick={handleCheckout} className="w-full">
                    Iniciar Compra
                  </Button>
                </SheetFooter>
              </>
            )}
            {isCheckoutVisible && (
              <>
                <SheetHeader className="sticky top-0 z-10 mb-2 items-start bg-white text-start">
                  <SheetTitle>Proceso de Compra</SheetTitle>
                  <SheetDescription>completa estos dos pasos.</SheetDescription>
                  <Separator className="my-2" />
                </SheetHeader>

                <ProcesoCompra />

                <SheetFooter className="absolute bottom-0 left-0 z-50 w-full bg-white">
                  <Button onClick={() => setIsCheckoutVisible(false)} className="w-full">
                    Regresar al carrito
                  </Button>
                </SheetFooter>
              </>
            )}
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  )
}
