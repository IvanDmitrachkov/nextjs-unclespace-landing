import React from 'react'

export interface ICardProduct {
  title: string
  text: string
  img: string
}

const CardProduct: React.FC<ICardProduct> = ({
  title,
  text,
  img
}: ICardProduct) => {
  return (
    <div
      style={{ background: 'radial-gradient(92.68% 92.68% at 58.58% 31.59%, #BCB0B9 0%, #B28091 100%)' }}
      className='relative rounded-16 h-400 w-full p-24 flex flex-col justify-end'
    >
      <img alt='' className='absolute right-0 top-0 h-300' src={img} />
      <h3 className='text-white text-32'>{title}</h3>
      <div className='text-white text-18 mt-14'>{text}</div>
    </div>
  )
}

export default React.memo(CardProduct)
