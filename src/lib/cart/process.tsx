import { Step, type StepItem, Stepper, useStepper } from '@/lib/common/components/stepper'
import { Button } from '@/components/ui/button'
import { TabsDomicilio } from './paso1-domicilio'

const steps = [{ label: 'Paso 1' }, { label: 'Paso 2' }] satisfies StepItem[]

export default function StepperDemo() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper variant="line" initialStep={0} steps={steps}>
        <Step label={steps[0].label}>
          <div className="my-2 flex h-full items-center justify-center rounded-md border text-primary">
            <TabsDomicilio />
          </div>
        </Step>
        <Step label={steps[1].label}>
          <div className="my-2 flex h-full items-center justify-center rounded-md border text-primary">
            <h1 className="text-xl">Step 2</h1>
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
          <h1 className="text-xl">Woohoo! All steps completed! 🎉</h1>
        </div>
      )}
      <div className="flex w-full justify-end gap-2">
        {hasCompletedAllSteps ? (
          <Button size="sm" onClick={resetSteps}>
            Reiniciar
          </Button>
        ) : (
          <>
            <Button disabled={isDisabledStep} onClick={prevStep} size="sm" variant="secondary">
              Atrás
            </Button>
            <Button size="sm" onClick={nextStep}>
              {isLastStep ? 'Terminar' : isOptionalStep ? 'Omitir' : 'Siguiente'}
            </Button>
          </>
        )}
      </div>
    </>
  )
}
