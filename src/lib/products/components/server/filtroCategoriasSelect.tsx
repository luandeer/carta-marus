'use client'
import React from 'react'
import { getCategorias } from '@/config/categorias'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BiSolidCategory } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
export const FiltroCategoriasSelect = () => {
  const menuCategorias = getCategorias()
  const pathname = usePathname()
  const router = useRouter()

  const handleSelect = (value: string) => {
    const selectedCategory = menuCategorias.find((cat) => cat.nombre === value)
    if (selectedCategory) {
      router.push(`/categoria/${selectedCategory.path}`)
    }
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex h-7 w-[200px] items-center justify-between rounded-xl bg-marusColor-verde text-sm font-normal text-marusColor-letras hover:bg-marusColor-verde hover:text-marusColor-letras"
          >
            <div className="flex items-center gap-2">
              <BiSolidCategory className="h-3.5 w-3.5" />
              <span className="whitespace-nowrap">Categorías Marus</span>
            </div>
            <IoIosArrowDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[200px] rounded-xl">
          <DropdownMenuLabel className="py-0.5">Selecciona:</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {menuCategorias.map(({ nombre, icon: Icon, path }) => {
            const isSelected = pathname.includes(`/categoria/${path}`)
            return (
              <DropdownMenuCheckboxItem key={nombre} checked={isSelected} className="py-0">
                <Link
                  href={`/categoria/${path}`}
                  className={cn(
                    'flex h-0 w-full flex-row-reverse items-center justify-end gap-2 py-4 text-marusColor-marron/80'
                  )}
                >
                  <h1 className="whitespace-nowrap text-sm">{nombre}</h1>
                  <span className="text-xl">
                    <Icon />
                  </span>
                </Link>
              </DropdownMenuCheckboxItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
