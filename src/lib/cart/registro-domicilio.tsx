'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { useTransition, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
const FormSchema = z.object({
  nombre: z.string({
    required_error: 'Escriba un nombre.'
  }),
  celular: z
    .string({
      required_error: 'Escriba un nombre.'
    })
    .min(9, { message: 'El celular debe tener 9 números.' }),
  manzana: z.string({
    required_error: 'Escriba un nombre.'
  }),
  lote: z.string({
    required_error: 'Escriba un nombre.'
  }),
  direccion: z.string({
    required_error: 'Escriba un nombre.'
  })
})

export function RegistroDomicilio() {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nombre: '',
      celular: '',
      manzana: '',
      lote: '',
      direccion: ''
    },
    mode: 'onSubmit'
  })

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      try {
        console.log(data)
        if (data) {
          toast.success('El domicilio se registró exitosamente!')
        } else {
          console.error('Error en la solicitud:')
          toast.error('No se registró el domicilio!')
        }
      } catch (error) {
        console.error('Error en la solicitud de crear orden:', error)
      }

      setOpen(false)
      form.setValue('nombre', '')
      form.setValue('celular', '')
      form.setValue('direccion', '')
      form.setValue('manzana', '')
      form.setValue('lote', '')
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-auto space-y-2 px-1 text-muted-foreground"
      >
        <h1 className="text-sm font-normal text-muted-foreground">Registre su domicilio...</h1>
        <div className="flex w-full flex-wrap items-center justify-between gap-2">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: Pepe" {...field} disabled={isPending} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="celular"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Celular</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: 999999999" {...field} disabled={isPending} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="direccion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej: calle, asociación, etc..."
                  {...field}
                  disabled={isPending}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full items-center justify-between gap-2">
          <FormField
            control={form.control}
            name="manzana"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Manzana</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: B2" {...field} disabled={isPending} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lote"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lote</FormLabel>
                <FormControl>
                  <Input placeholder="Ej: 1" {...field} disabled={isPending} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="h-7 w-full" disabled={isPending}>
          {isPending ? (
            <div className="flex items-center gap-2">
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Registrando
            </div>
          ) : (
            'Registrar'
          )}
        </Button>
      </form>
    </Form>
  )
}
