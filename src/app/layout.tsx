import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header, NavCategorias, TailwindIndicator } from "@/components";
import { cn } from "@/lib/utils"
import ProviderBarraAdmi from "@/context/ProviderBarraAdmi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "bg-background  antialiased min-h-screen flex flex-col",
        inter.className
      )}>
        <Header />
        <div className="bg-marusColor-fondoClaro flex-1 flex-col">
          <div className="mt-10 container"><NavCategorias/></div>
          <div className="container flex-1 md:pb-10"><ProviderBarraAdmi>{children}</ProviderBarraAdmi></div>
        </div>


        <TailwindIndicator />
      </body>
    </html>
  );
}
