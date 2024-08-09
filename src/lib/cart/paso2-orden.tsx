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
    <Card>
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">Resumen de Pedido</CardTitle>
          <CardDescription>Fecha: 9 de agosto de 2024</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <div className="grid gap-3">
          <div className="font-semibold">Platos Ordenados</div>
          <ScrollArea className="h-16 w-full">
            <ul className="grid gap-3">
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
          </ScrollArea>
          <Separator className="my-2" />
          <ul className="grid gap-3">
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
        <Separator className="my-4" />
        <ScrollArea className="h-20 w-full">
          <div className="grid gap-3">
            <div className="font-semibold">Información del Cliente</div>
            <dl className="grid gap-3">
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
                <dd>Calle Principal 123, Ciudad, Estado 12345</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Instrucciones</dt>
                <dd>Dejar el pedido en la puerta</dd>
              </div>
            </dl>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
