import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Categoria {
  nombre: string
  Icon: any
  path?: string
}

export const CardCategories = ({ nombre, Icon, path }: Categoria) => {
  return (
    <Link href={`/categoria/${path}`} className="h-full w-full">
      <div className="rounded-lg border border-marusColor-marron/20 bg-transparent px-6 py-4 transition-transform duration-300 ease-in-out hover:scale-95">
        <div className="mb-2">{Icon}</div>
        <div>
          <h3 className="text-sm font-medium capitalize text-marusColor-marron lg:text-base">
            {nombre}
          </h3>
          <div className="text-xs text-marusColor-marron/50 lg:text-sm">1 Products</div>
        </div>
      </div>
    </Link>
  )
}
