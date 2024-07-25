import Image from "next/image";
import { Buscador } from "./buscador";
import { Cart } from "../client/cart";
import { MenuHeader } from "@/lib/common";

export function Header() {
    return (
        <div className="bg-marusColor-marron border-b-4 border-marusColor-anaranjado sticky top-0 z-40 shadow-md">
            <div className="flex items-center justify-between container relative px-4 xl:px-2">
                <div className="my-0 flex items-center">
                <MenuHeader/>
                    <Image
                        src="/logoMarus.png"
                        alt="logo de marus"
                        width={1000}
                        height={1000}
                        className="w-auto h-14 object-cover  px-4 py-1 rounded-md"
                        priority
                    />
                </div>
                <h1 className="absolute left-1/2 transform -translate-x-1/2  -bottom-3 hidden px-2 bg-marusColor-anaranjado rounded-lg text-marusColor-marron font-semibold w-min whitespace-nowrap shadow-lg text-sm ">
                Carta Marus Brasa</h1>
                <div className="flex items-center gap-2">
                    <Buscador />
                    <Cart />
                </div>
            </div>
        </div>
    );
}
