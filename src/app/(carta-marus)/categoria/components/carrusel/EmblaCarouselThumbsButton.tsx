import React from 'react'
import "@/styles/embla.css"
import Image from 'next/image'

type PropType = {
  selected: boolean
  index: any
  onClick: () => void
}

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick } = props

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
         <Image
                  className="w-full rounded-xl max-w-full"
                  src={`${index}`}
                  alt=""
                  width="1000"
                  height="1000"
                />
      </button>
    </div>
  )
}