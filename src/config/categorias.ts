import { SquarePen } from "lucide-react";
import { BiSolidDrink } from "react-icons/bi";
import { GiChickenLeg, GiRoastChicken } from "react-icons/gi";
import {  LuBeef, LuSalad } from "react-icons/lu";
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
        nombre: "Brasa Familiar",
        icon: GiRoastChicken,
        path: "brasa-familiar",
      },
      {
        nombre: "Brasa Personal",
        icon: GiChickenLeg,
        path: "brasa-personal",
      },
      {
        nombre: "Parrilla Familiar",
        icon: MdOutdoorGrill,
        path: "parrilla-familiar",
      },
      {
        nombre: "Parrilla Personal",
        icon: LuBeef,
        path: "parrilla-personal",
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