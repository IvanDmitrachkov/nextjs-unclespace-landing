// packages
import React from 'react'
import cn from 'classnames'

interface BgImage {
  image?: string,
  children?: React.ReactNode,
  className?: string
}

const BgImage = ({
                   image,
                   children,
                   className
}: BgImage) => {
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
