import { useState, useEffect } from "react";
import { getTodosProductosMarus } from "@/lib/products/actions";

// This hook is used to fetch and manage the historial llevar data
export function useGetProductsMarus() {
  const [products, setproducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      setIsLoading(true); // Asegúrate de que el estado de carga se establece al inicio
      const data = await getTodosProductosMarus();
      setproducts(data);
    } catch (error) {
      console.error("Error en la solicitud del historial para products", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { products, isLoadingProducts: isLoading };
}
