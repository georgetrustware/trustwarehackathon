import "@/styles/globals.css";
import { ThirdwebProvider } from 'thirdweb/react';

// import {
//   initData,
//   miniApp,
// useLaunchParams,
//   useSignal,

// } from '@telegram-apps/sdk-react'

import { AppRoot } from '@telegram-apps/telegram-ui'

import React, { Suspense } from 'react'
// import './mockEnv.js'
import '@telegram-apps/telegram-ui/dist/styles.css'
// import './styles/styles.css'

import '@/styles/styles.css'
// import { initialize } from '@/services/telegram-sdk.js'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { config } from '@/services/wagmi.js'
import { WagmiProvider } from 'wagmi'
// import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { WC_WEB3_PROJECT_ID } from './constants.js'
import Spinner from '@/components/Spinner.js'
// import { retrieveLaunchParams } from '@telegram-apps/sdk-react'
 const WC_WEB3_PROJECT_ID = process.env.NEXT_PUBLIC_WC_WEB3_PROJECT_ID || 'something'

createWeb3Modal({
  wagmiConfig: config,
  projectId: WC_WEB3_PROJECT_ID,
  featuredWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
    '8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4', // BNB
    '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709', // OKX Wallet
    '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662', // Bitget Wallet project ID
    '21c3a371f72f0057186082edb2ddd43566f7e908508ac3e85373c6d1966ed614', // Bitget Wallet Lite project ID
  ],
  allWallets: 'HIDE',
})

// initialize(retrieveLaunchParams().startParam === 'debug')

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient()
    // const isDark = useSignal(miniApp?.isDark)
    // const lp = useLaunchParams()
  return (
        <AppRoot
      // appearance={isDark ? 'dark' : 'light'}
      // platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >


    <ThirdwebProvider> 
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Spinner />}>
          <Component {...pageProps} />;
          </Suspense>
        </QueryClientProvider>
      </WagmiProvider>
    </ThirdwebProvider>
    </AppRoot>
  )
}
