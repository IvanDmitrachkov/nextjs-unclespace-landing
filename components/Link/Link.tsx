import React from 'react'
import RouterLink from 'next/link'

interface ILink {
  href?: string | object,
  children?: React.ReactNode
}

const Link = ({ href, ...props }: ILink) => {
  return href
    ? <RouterLink href={href} {...props} />
    : <span {...props} />
}

export default React.memo(Link)
