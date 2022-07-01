import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {store} from '../store'
import { Provider } from 'react-redux'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <body>
  <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
    </body>
    </React.StrictMode>
  )
}



export default MyApp
