import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ConsultarDomicilio } from './consultar-domicilio'

export function TabsDomicilio() {
  return (
    <Tabs defaultValue="tab1" className="w-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="tab1">¿Frecuente?</TabsTrigger>
        <TabsTrigger value="tab2">¿Nuevo?</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <ConsultarDomicilio />
      </TabsContent>
      <TabsContent value="tab2">asds</TabsContent>
    </Tabs>
  )
}
