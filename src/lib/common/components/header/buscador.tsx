"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useGetProductsMarus } from "../../hooks/cliente-get-products-marus";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function Buscador() {
  const [open, setOpen] = React.useState(false);
  const { products } = useGetProductsMarus();
  function handleSearch() {
    setOpen((open) => !open);
  }
  const router = useRouter();

  // Agrupar productos por categoría
  const groupedProducts = products.reduce((acc: any, product: any) => {
    if (!acc[product.categoria]) {
      acc[product.categoria] = [];
    }
    acc[product.categoria].push(product);
    return acc;
  }, {});

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    //se puede pasar funciones
    command();
  }, []);
  return (
    <>
      <Button
        className="flex h-0 items-center justify-between gap-2 rounded-lg bg-[#FBA5001F] px-2.5 py-3 text-xs text-marusColor-letras hover:bg-[#FBA5001F]/20"
        onClick={handleSearch}
      >
        <SearchIcon className="size-3" /> ¿Qué se te antoja?...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Buscar producto..." />
        <CommandList>
          <CommandEmpty>No se encontró producto.</CommandEmpty>
          {Object.keys(groupedProducts).map((categoria) => (
            <React.Fragment key={categoria}>
              <CommandGroup heading={categoria}>
                {groupedProducts[categoria].map((product: any) => (
                  <CommandItem
                    key={product.id}
                    onSelect={() => {
                      runCommand(() => router.push(`/products/${product.id}`));
                    }}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <Image
                      src={product.imagenes?.[0]?.urls?.[0]}
                      alt={product.nombre}
                      className="size-10 rounded-lg"
                      width="50"
                      height="50"
                    />
                    <span>{product.nombre}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
