import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
        <ChakraProvider>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </ChakraProvider>
    </React.StrictMode>
  )
}

export default MyApp