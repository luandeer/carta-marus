import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogClose,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SearchIcon, XIcon } from "lucide-react";

export function Buscador() {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button className="bg-marusColor-fondoClaro flex items-center justify-between gap-2 px-2.5  hover:bg-marusColor-fondoClaro/20 h-0 py-3 rounded-lg text-xs font-normal">
                    Buscar producto...  <SearchIcon className="h-3 w-3" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] min-h-40 p-0 top-[20%] " >
                <DialogHeader>
                    <DialogTitle className=""><div className="flex items-center gap-2 rounded-t-md bg-background px-2 shadow-sm border-b border-marusColor-marron/30">
                    <SearchIcon className="h-5 w-5 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Busque un producto..."
                        className="w-full border-0 bg-transparent font-normal"
                    />
                </div></DialogTitle>
                    
                </DialogHeader>
                
                <DialogFooter className="items-end mb-2 mx-2">
                    <DialogClose className="w-full bg-marusColor-marron rounded-lg h-max py-1 text-white text-sm" aria-label="Close">Regresar</DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
