import { NavCategorias } from '@/components'
import BannerCarrusel from '@/lib/home/components/BannerSlider'

export default function Home() {
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const OPTIONS: any = { loop: true, duration: 30 }

  return (
    <div className="container mt-4">
      <BannerCarrusel slides={SLIDES} options={OPTIONS} />
      <div className="my-4 flex flex-col gap-2">
        <h1 className="px-1 text-lg font-medium">Categorías </h1>
        <NavCategorias />
      </div>
    </div>
  )
}
