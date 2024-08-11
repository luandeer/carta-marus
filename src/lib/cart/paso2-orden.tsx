import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
export const EnviarOrden = () => {
  return (
    <div>
      <div className="border-b-2 border-white bg-muted/50 px-4 py-1">
        <h1 className="group flex items-center gap-2 text-base font-medium">Detalle del Pedido</h1>
      </div>
      <div className="bg-muted/50 p-4 text-sm">
        <div className="grid gap-2">
          <ul className="grid gap-1.5">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Hamburguesa x <span>1</span>
              </span>
              <span>$10.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Pizza Margarita x <span>1</span>
              </span>
              <span>$15.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">
                Ensalada César x <span>1</span>
              </span>
              <span>$8.00</span>
            </li>
          </ul>
          <Separator className="my-2" />
          <ul className="grid gap-1.5">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$33.00</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span>$3.00</span>
            </li>
            <li className="flex items-center justify-between font-semibold">
              <span className="text-muted-foreground">Total</span>
              <span>$36.00</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 border-white bg-muted/50 px-4 py-2">
        <ScrollArea className="h-auto w-full">
          <div className="grid gap-3">
            <div className="font-semibold">Información del Cliente</div>
            <dl className="grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Nombre</dt>
                <dd>Juan Pérez</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Teléfono</dt>
                <dd>
                  <a href="#">+1 234 567 890</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Dirección</dt>
                <dd className="text-end">Calle Principal 123, Ciudad</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Instrucciones</dt>
                <dd>Dejar el pedido en la puerta</dd>
              </div>
            </dl>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
