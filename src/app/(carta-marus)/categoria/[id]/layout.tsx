import { NavCategorias, TitleCategorias } from "@/components";

//lrc para crear layout (comando atajo)
export default function LayoutCategorias({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TitleCategorias />
      <div className="sticky top-[60px] z-20 mb-2 bg-[#FAF6ED] shadow-lg">
        <NavCategorias />
      </div>
      <div className="container px-1.5 pt-2">{children}</div>
    </div>
  );
}
