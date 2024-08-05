import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
export const FiltroSelect = ({ setSortOption }: any) => {
  return (
    <Select
      onValueChange={(value) => {
        setSortOption(value)
      }}
    >
      <SelectTrigger className="h-0 w-[125px] rounded-xl border border-marusColor-marron/10 bg-marusColor-anaranjado px-3 py-2.5 text-sm text-white">
        <SelectValue placeholder="ordenar por" />
      </SelectTrigger>
      <SelectContent className="w-auto rounded-xl text-marusColor-marron">
        <SelectGroup>
          <SelectLabel className="text-sm">Ordenar por:</SelectLabel>
          <SelectItem className="text-sm" value="priceAsc">
            Menor precio
          </SelectItem>
          <SelectItem className="text-sm" value="priceDesc">
            Mayor precio
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
