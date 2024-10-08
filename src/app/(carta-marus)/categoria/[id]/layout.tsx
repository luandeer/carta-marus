import { NavCategorias, TitleCategorias } from '@/components'
import { FiltroCategoriasSelect } from '@/lib/products/components/server/filtroCategoriasSelect'

//lrc para crear layout (comando atajo)
export default function LayoutCategorias({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="sticky top-[60px] z-20 mt-2 bg-marusColor-fondoClaro py-2 transition-transform duration-200 ease-in-out">
        <FiltroCategoriasSelect />
      </div>
      <div className="hidden">
        <TitleCategorias />
        <div className="sticky top-[60px] z-20 mb-2 bg-marusColor-fondoClaro transition-transform duration-200 ease-in-out">
          <NavCategorias />
        </div>
      </div>
      <div className="py-2">{children}</div>
    </div>
  )
}
