// packages
import React, { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'

/** компонент оборачивающий элементы, которые не должны рисоваться на сервере */
const NoSSR = ({ children }) => {
  const [mount, setMount] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setMount(true)
  }, [])

  if (mount) {
    return children
  }
  return null
}

export default React.memo(NoSSR)
