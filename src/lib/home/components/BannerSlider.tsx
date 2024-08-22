'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import '@/styles/embla.css'

import { DotButton, useDotButton } from './dotButon'
type PropType = {
  slides: number[]
  options?: any
}

const BannerCarrusel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                className="h-32 w-full max-w-full rounded-xl object-cover"
                src={`https://picsum.photos/600/350?v=${index}`}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex w-full items-center justify-center">
        {/* <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> */}
        <div className="flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'size-2 rounded-full border border-gray-700 p-1'.concat(
                index === selectedIndex ? 'border-gray-950 bg-black' : 'bg-white/50'
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BannerCarrusel
