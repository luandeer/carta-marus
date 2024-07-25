import { getProductosMarus } from "@/action";
import { Products } from "@/lib/products/components";

export default async function Page({ params }: { readonly params: { readonly id: any } }) {
  const productos = await getProductosMarus(`${params.id}`);

  if(productos.length === 0){
    return(<p className="py-5">No hay ningun producto en esta categoría.</p>)
  }else {
    return (
      <Products dataProductos={productos} path={params.id}/>
    );
  }
  
}