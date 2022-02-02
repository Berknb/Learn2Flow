import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Logo from '../images/learn2flowLogo.png'
import MainNav from '../components/MainNav'
import { Provider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Provider store={store}>
    <MainNav logo={Logo} />
  <Component {...pageProps} />
  </Provider>
  )
}

export default MyApp
