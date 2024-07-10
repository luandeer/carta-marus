import Image from "next/image";
import { BsCart3 } from "react-icons/bs";

export function Header() {
    return (
        <div className="bg-marusColor-marron border-b-4 border-marusColor-anaranjado ">
            <div className="flex items-center justify-between container">
                <div className="bg-gradient-to-r from-amber-200 to-yellow-400 border border-marusColor-anaranjado rounded-md mt-[5px]   mb-[-10px] shadow-lg"><Image src="/logoMarus.png" alt="logo de marus" width={1000} height={1000} className="w-auto h-14 object-cover  px-4 py-1 rounded-md" priority/></div>

                <BsCart3 className="text-white size-7" />
            </div>

        </div>
    );
}