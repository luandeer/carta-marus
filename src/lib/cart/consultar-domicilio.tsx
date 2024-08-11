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
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { toast } from '@/components/ui/use-toast'

const FormSchema = z.object({
  pin: z.string().min(9, {
    message: 'Necesitas escribir 9 caractéres.'
  })
})

export function ConsultarDomicilio() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: ''
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-auto space-y-6 lg:px-1">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-normal text-muted-foreground">
                Busque su domicilio con su número de celular...
              </FormLabel>
              <FormControl>
                <InputOTP maxLength={9} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="w-8" />
                    <InputOTPSlot index={1} className="w-8" />
                    <InputOTPSlot index={2} className="w-8" />
                    <InputOTPSlot index={3} className="w-8" />
                    <InputOTPSlot index={4} className="w-8" />
                    <InputOTPSlot index={5} className="w-8" />
                    <InputOTPSlot index={6} className="w-8" />
                    <InputOTPSlot index={7} className="w-8" />
                    <InputOTPSlot index={8} className="w-8" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="h-7">
          Buscar
        </Button>
      </form>
    </Form>
  )
}
