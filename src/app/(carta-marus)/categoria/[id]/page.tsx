import { getProductosMarus } from "@/action";
import { Productos } from "../components/productos";

export default async function Page({ params }: { readonly params: { readonly id: any } }) {
  const productos = await getProductosMarus(`${params.id}`);

  if(productos.length === 0){
    return(<p className="py-5">No hay ningun producto en esta categoría.</p>)
  }else {
    return (
      <Productos dataProductos={productos} path={params.id}/>
    );
  }
  
}