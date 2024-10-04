import Image from 'next/image'
import { Buscador } from './buscador'
import { Cart } from './cart'
import { MenuHeader } from './menu'
import Link from 'next/link'
import { NavLinks } from '@/components/header/NavLinks'

export function Header() {
  return (
    <div className="sticky top-0 z-40 border-b-4 border-marusColor-anaranjado bg-marusColor-marron px-6 shadow-md">
      <div className="container relative flex items-center justify-between px-0">
        <div className="flex items-center">
          <MenuHeader />
          <Link href="/">
            <Image
              src="/logov2.png"
              alt="logo de marus"
              width={600}
              height={600}
              className="h-14 w-auto rounded-md object-cover py-1.5"
              priority
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <h1 className="absolute -bottom-3 left-1/2 hidden w-min -translate-x-1/2 transform whitespace-nowrap rounded-lg bg-marusColor-anaranjado px-2 text-sm font-semibold text-marusColor-marron shadow-lg">
          Carta Marus Brasa
        </h1>
        <div className="flex items-center gap-3">
          <Buscador />
          <Cart />
        </div>
      </div>
    </div>
  )
}
