import { BiFoodMenu } from "react-icons/bi";

export const TitleCategorias = () => {
  return (
    <div className="bg-marusColor-fondoClaro pt-2">
      <div className="container px-2 text-marusColor-rojo">
        <h1 className="flex items-center justify-start gap-1 text-lg font-bold">
          Carta Marus
          <BiFoodMenu />
        </h1>
      </div>
    </div>
  );
};
