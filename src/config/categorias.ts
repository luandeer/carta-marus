import { SquarePen } from "lucide-react";
import { BiSolidDrink } from "react-icons/bi";
import { GiRoastChicken } from "react-icons/gi";
import {  LuSalad } from "react-icons/lu";
import { MdOutdoorGrill } from "react-icons/md";
import { PiChartPieSliceFill } from "react-icons/pi";
import { RiDrinks2Fill } from "react-icons/ri";
interface Categoria {
    nombre: string;
    icon: any;
    path?: string;
  }
export function getCategorias():Categoria[] {
    return [
      
      {
        nombre: "Brasa",
        icon: GiRoastChicken,
        path: "brasa",
      },
      {
        nombre: "Parrillas",
        icon: MdOutdoorGrill,
        path: "parrillas",
      },
      {
        nombre: "Ensaladas",
        icon: LuSalad,
        path: "ensaladas",
      },
      {
        nombre: "Bebidas",
        icon: RiDrinks2Fill,
        path: "bebidas",
      },
      {
        nombre: "Tragos",
        icon: BiSolidDrink,
        path: "tragos",
      },
      {
        nombre: "extras",
        icon: PiChartPieSliceFill,
        path: "extras",
      },
      
    ];
  }