import { FaMapLocationDot } from "react-icons/fa6";

export const BannerDomicilio = () => {
  return (
    <div className="w-full bg-marusColor-verde py-1 hidden">
    <div className="container px-4 md:px-6 flex flex-col items-center justify-center gap-4">
      <div className="max-w-2xl text-center text-primary-foreground">
        <div className="flex items-center justify-center gap-3">
          <FaMapLocationDot className="size-5" />
          <h2 className="text-xs  font-medium">Registra tu Dirección <span className="underline underline-offset-4">Aquí</span></h2>
        </div>
        <p className="mt-2 text-xs hidden">
        Solo necesitas registrar tu dirección una vez. Así, no tendrás que ingresar tu dirección cada vez que hagas un pedido.

        </p>
      </div>
    </div>
  </div>
  )
}
