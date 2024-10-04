'use client'
import { usePathname } from 'next/navigation'
import { GoHomeFill } from 'react-icons/go'
import { ActiveLinks } from './ActiveLinks'
import { AiFillProduct, AiOutlineProduct } from 'react-icons/ai'

type Group = {
  name: string
  href: string
  icon: JSX.Element
  active: boolean
}
export function getMenuList(pathname: string): Group[] {
  return [
    {
      name: 'Inicio',
      href: '/',
      active: pathname === '/',
      icon: <GoHomeFill className="size-4" />
    },
    {
      name: 'Catálogo',
      href: '/categoria/brasa-familiar',
      active: pathname.includes('/categoria') || pathname.includes('/products'),
      icon: <AiFillProduct className="size-4" />
    }
  ]
}
export const NavLinks = () => {
  const pathname = usePathname()
  const menuList = getMenuList(pathname)
  return (
    <div className="flex gap-2">
      {menuList.map((link) => {
        return <ActiveLinks key={link.name} {...link} />
      })}
    </div>
  )
}
