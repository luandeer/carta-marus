import Link from 'next/link'
import clsx from 'clsx'

interface Props {
  name: string
  href: string
  icon?: JSX.Element
  active: boolean
}
export const ActiveLinks = ({ name, href, icon, active }: Props) => {
  return (
    <Link
      key={name}
      href={href}
      className={clsx(
        'flex h-auto grow items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-marusColor-letras hover:text-white md:flex-none md:justify-start',
        {
          '!text-marusColor-anaranjado': active
        }
      )}
    >
      {icon}
      <p className="hidden md:block">{name}</p>
    </Link>
  )
}
