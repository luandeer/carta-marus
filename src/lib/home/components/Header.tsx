import { NavCategorias } from '@/components'
import { Button } from '@/components/ui/button'

export const HeaderHome = () => {
  return (
    <>
      <div className="relative flex h-[500px] flex-col items-center justify-center rounded-xl text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="mb-4 text-4xl font-bold">Bienvenido a Marus Brasa</h1>
          <p className="mb-8 text-xl">Descubre sabores increíbles desde la comodidad de tu hogar</p>
        </div>
      </div>
      <div className="my-4 flex flex-col gap-2">
        <h1 className="px-1 text-lg font-medium">Categorías </h1>
        <NavCategorias />
      </div>
    </>
  )
}

export default HeaderHome
