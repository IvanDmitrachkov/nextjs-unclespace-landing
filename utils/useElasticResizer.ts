import { useEffect } from 'react'

export const onResize = () => {
  const html = document.documentElement
  let width = html.clientWidth
  const baseSize = 10
  let baseWidth, maxWidth

  if (width > 1024) {
    baseWidth = 1280
    maxWidth = 1280
  } else if (width < 768) {
    baseWidth = 320
    maxWidth = 768
  } else {
    baseWidth = 768
    maxWidth = 1025
  }

  if (width > baseWidth) {
    width = Math.min(width, maxWidth)
  }

  const curFontSize = Math.round((width / baseWidth * baseSize) * 100) / 100
  console.log(curFontSize)
  html.style.fontSize = curFontSize + 'px'
}

/** хук для резиновой верстки */
const useElasticResizer = () => {
  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])
}

export default useElasticResizer
