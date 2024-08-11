import { Step, type StepItem, Stepper, useStepper } from '@/lib/common/components/stepper'
import { Button } from '@/components/ui/button'
import { TabsDomicilio } from './paso1-domicilio'
import { EnviarOrden } from './paso2-orden'

const steps = [{ label: 'Paso 1' }, { label: 'Paso 2' }] satisfies StepItem[]

export default function ProcesoCompra() {
  return (
    <div className="z-0 mb-10 flex w-full flex-col gap-4">
      <Stepper variant="circle" initialStep={0} steps={steps}>
        <Step label={steps[0].label}>
          <div className="my-2 h-full text-primary">
            <h1 className="mb-2 text-sm font-semibold text-muted-foreground">
              ¿Tienes tu domicilio registrado?{' '}
            </h1>
            <TabsDomicilio />
          </div>
        </Step>
        <Step label={steps[1].label}>
          <div className="my-2 text-primary">
            <h1 className="mb-2 text-sm font-semibold text-muted-foreground">
              Revise su orden y finalice la orden.{' '}
            </h1>

            <EnviarOrden />
          </div>
        </Step>

        <Footer />
      </Stepper>
    </div>
  )
}

const Footer = () => {
  const {
    nextStep,
    prevStep,
    resetSteps,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
    isDisabledStep
  } = useStepper()
  return (
    <>
      {hasCompletedAllSteps && (
        <div className="my-2 flex h-full items-center justify-center rounded-md border bg-secondary text-primary">
          <h1 className="p-2 text-xl">Muy bien! Felicidades su compra ha terminado! 🎉</h1>
        </div>
      )}
      <div className="flex w-full justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" className="hidden" onClick={resetSteps}>
            Reiniciar
          </Button>
        ) : (
          <>
            <Button disabled={isDisabledStep} onClick={prevStep} size="sm" variant="secondary">
              Atrás
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? 'Finalizar' : isOptionalStep ? 'Omitir' : 'Siguiente'}
            </Button>
          </>
        )}
      </div>
    </>
  )
}
