import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ConsultarDomicilio } from './consultar-domicilio'

export function TabsDomicilio() {
  return (
    <Tabs defaultValue="tab1" className="w-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="tab1" className="w-full">
          Si
        </TabsTrigger>
        <TabsTrigger value="tab2" className="w-full">
          No
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <ConsultarDomicilio />
      </TabsContent>
      <TabsContent value="tab2">asds</TabsContent>
    </Tabs>
  )
}
