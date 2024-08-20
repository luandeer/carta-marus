'use client'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Image from 'next/image'
import '@/styles/embla.css'

type PropType = {
  slides: number[]
  options?: any
}

export const CarruselMovil: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container">
          {slides?.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <Image
                  className="h-full w-full max-w-full object-contain"
                  src={`${slide}`}
                  alt=""
                  width="1000"
                  height="1000"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 transform">
          <div className="flex items-center gap-2">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'size-2 rounded-full border border-gray-100'.concat(
                  index === selectedIndex ? 'border-gray-400 bg-white' : 'bg-white/50'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
