import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import store from '../app/state/store'
import MainLayout from '../app/components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <MainLayout>
        <Component {...pageProps} />
        </MainLayout>
      </SessionProvider>
    </Provider>
  )
}

export default MyApp
