import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
export const FiltroSelect = ({ sortOption, setSortOption }: any) => {
  return (
    <Select
      onValueChange={(value) => {
        setSortOption(value)
      }}
    >
      <SelectTrigger className="h-0 w-[150px] rounded-xl border border-marusColor-marron/10 bg-marusColor-anaranjado px-3 py-3 text-white">
        <SelectValue placeholder="ordenar por" />
      </SelectTrigger>
      <SelectContent className="w-[150px] rounded-xl text-marusColor-marron">
        <SelectItem value="priceAsc">Menor precio</SelectItem>
        <SelectItem value="priceDesc">Mayor precio</SelectItem>
      </SelectContent>
    </Select>
  )
}
