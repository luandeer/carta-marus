import { getProductoById } from "@/action";
import { DetalleProducto } from "../../components/detalle-producto-movil";

export default async function Page({ params }: { readonly params: { readonly productId: any } }) {
  const producto = await getProductoById(`${params.productId}`);
  if(producto.length === 0){
    return(<p className="py-5">No hay poducto.</p>)
  }else {
    return (
      <DetalleProducto dataProducto={producto}/>
    );
  }
  
}