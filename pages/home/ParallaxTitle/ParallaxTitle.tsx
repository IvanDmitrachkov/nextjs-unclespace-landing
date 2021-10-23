// packages
import React, { useEffect } from 'react'

/** Заголовок с эффектом паралакс */
const ParallaxTitle: React.FC = () => {
  useEffect(() => {
    const titleElement = document.getElementById('parallax-title')
    if (!titleElement) return
    const titleTop = +titleElement.getBoundingClientRect().top

    const x1 = titleTop - window.innerHeight
    const x2 = titleTop - 1

    const _getPosition = (s: number) => (s - x1) / (x2 - x1)

    const k = 100

    let state: number = 0

    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY

      const prevState = state
      state = scrollValue < x1 ? 0 : scrollValue > x2 ? 2 : 1

      if (state === 1) {
        const pos = _getPosition(scrollValue)
        titleElement.style.transform = `translate(${pos * k}px)`
      } else {
        if (prevState !== state) {
          if (state === 0) {
            titleElement.style.transform = 'translate(0px)'
          } else if (state === 2) {
            titleElement.style.transform = 'translate(100px)'
          }
        }
      }
    })
  }, [])

  return (
    <div className='lg:w-desktop md:px-24 sm:px-20 mx-auto py-240'>
      <h2 className='text-64 sm:text-32'>
        <span className='block'>Создавай</span>
        <span id='parallax-title' className='block will-change-transform'>собственное</span>
        <span className='block'>будущее</span>
      </h2>
    </div>
  )
}

export default React.memo(ParallaxTitle)
