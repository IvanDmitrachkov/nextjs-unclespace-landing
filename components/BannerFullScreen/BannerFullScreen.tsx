// packages
import React from 'react'

interface IBannerFullScreen {
  title?: string,
  text?: string
}

/** большой баннер */
const BannerFullScreen: React.FC<IBannerFullScreen> = ({ title, text }: IBannerFullScreen) => {
  return (
    <div
      className='h-screen w-full'
      style={{ background: 'linear-gradient(112.82deg, #2D203A 20.85%, #B28091 100%)' }}
    >
      <div className='flex flex-col items-center h-full justify-center'>
        <h1 className='text-white text-center text-72 sm:text-42'>{title}</h1>
        {text && <div className='text-18 text-white mt-24 sm:text-16 sm:mt-8'>{text}</div>}
      </div>
    </div>
  )
}

export default React.memo(BannerFullScreen)
