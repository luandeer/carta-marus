import { NavCategorias } from '@/components'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import BannerCarrusel from '@/lib/home/components/BannerSlider'
import HeaderHome from '@/lib/home/components/Header'
import { Badge } from 'lucide-react'

export default function Home() {
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const OPTIONS: any = { loop: true, duration: 30 }

  return (
    <div className="container mt-4">
      <BannerCarrusel slides={SLIDES} options={OPTIONS} />
      <HeaderHome />

      <section className="bg-secondary py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Ofertas Especiales del Día</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                name: 'Combo Familiar',
                description: '2 Pizzas grandes + 1 Refresco 2L',
                price: '$24.99',
                oldPrice: '$32.99'
              },
              {
                name: 'Menú del Día',
                description: 'Plato principal + Postre + Bebida',
                price: '$15.99',
                oldPrice: '$19.99'
              }
            ].map((offer) => (
              <Card key={offer.name} className="flex flex-col overflow-hidden md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src="/placeholder.svg?height=200&width=200&text=Oferta"
                    alt={offer.name}
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                <CardContent className="flex flex-col justify-between p-6 md:w-1/2">
                  <div>
                    <Badge className="mb-2">Oferta</Badge>
                    <h3 className="mb-2 text-lg font-semibold">{offer.name}</h3>
                    <p className="mb-4 text-muted-foreground">{offer.description}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{offer.price}</p>
                    <p className="text-muted-foreground line-through">{offer.oldPrice}</p>
                    <Button className="mt-4 w-full">Aprovechar Oferta</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Cómo funciona</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Elige tus platos',
                description: 'Navega por nuestro menú y selecciona tus favoritos.'
              },
              {
                title: 'Realiza tu pedido',
                description: 'Confirma tu orden y elige el método de pago.'
              },
              {
                title: 'Espera la entrega',
                description: 'Relájate mientras preparamos y entregamos tu comida.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
