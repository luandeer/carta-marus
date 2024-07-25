import { getProductoById } from "@/action";
import { DetalleProducto } from "@/lib/product/components";

export default async function Page({
    params,
}: {
    readonly params: { readonly slug: any };
}) {
    const producto = await getProductoById(`${params.slug}`);
    if (producto.length === 0) {
        return <p className="py-5">No hay poducto.</p>;
    } else {
        return <DetalleProducto dataProducto={producto} />;
    }
}
