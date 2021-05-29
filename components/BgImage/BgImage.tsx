// packages
import React from 'react'
import cn from 'classnames'

interface IBgImage {
  image?: string,
  children?: React.ReactNode,
  className?: string
}

const BgImage = ({
  image,
  children,
  className
}: IBgImage) => {
  return (
    <div
      className={cn('bg-center bg-no-repeat bg-cover', className)}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  )
}

export default React.memo(BgImage)
