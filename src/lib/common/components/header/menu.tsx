import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";

export function MenuHeader() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex flex-col items-center justify-center border-none bg-transparent px-0 py-0 font-normal text-white hover:bg-transparent">
          <FiMenu className="size-6" />
          <p className="text-[9px]">Menú</p>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
