import React from 'react'
import { Hydrate } from 'react-query/hydration'
import 'styles/roboto/stylesheet.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'styles/global.css'

// eslint-disable-next-line react/prop-types
function MyApp ({ Component, pageProps }) {
  const queryClientRef = React.useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      {/* eslint-disable-next-line react/prop-types */}
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
