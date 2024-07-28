// React and Next.js imports
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { FaFacebook, FaGithub } from 'react-icons/fa6'
import { FaTwitter } from 'react-icons/fa'
import { ButtonAnimation } from '../ui/ButtonAnimation'

export function Footer() {
  return (
    <footer className="border-t-4 border-marusColor-anaranjado bg-marusColor-marron">
      <section className="px-6 py-6">
        <div className="grid gap-12 pb-2 text-marusColor-letras md:grid-cols-[1.5fr_0.5fr_0.5fr_0.5fr]">
          <div className="flex flex-col gap-6">
            <Link href="/" className="w-max">
              <Image
                src="/logov2.png"
                alt="Logo"
                width={120}
                height={27.27}
                className="object-cover"
              ></Image>
            </Link>
            <p>Nuestro mejores platos para ti.</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="underline underline-offset-4">Mapa de sitio</h5>

            <ButtonAnimation
              variant="linkHover2"
              className="h-auto w-min px-0 after:bg-white"
              asChild
            >
              <Link href="/">Blog</Link>
            </ButtonAnimation>
            <Link href="/">Authors</Link>
            <Link href="/">Categories</Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="underline underline-offset-4">Atencion al cliente</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h5 className="underline underline-offset-4">Contacto</h5>
            <Link href="/privacy-policy">Atención - 12:00 pm a 11:00 pm</Link>
            <Link href="/terms-of-service">Teléfono Lima - (01) 500 2550</Link>
            <Link href="/cookie-policy">reservaslalena@adv.com.pe</Link>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 border-t pt-2 md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <FaGithub />
            </Button>
            <Button variant="outline" size="icon">
              <FaTwitter />
            </Button>
            <Button variant="outline" size="icon">
              <FaFacebook />
            </Button>
          </div>
          <p className="text-sm text-marusColor-letras">
            © <a href="https://github.com/brijr/components">Marus Brasa</a>. Todos los derechos son
            reservados. 2024-actualidad.
          </p>
        </div>
      </section>
    </footer>
  )
}
