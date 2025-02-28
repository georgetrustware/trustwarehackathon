import { useAccount } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
// import {
//   TonConnectButton,
//   useTonAddress,
//   useTonWallet,
// } from '@tonconnect/ui-react'
import Page from '../components/layout/Layout'
import { Button, LargeTitle, Text } from '@telegram-apps/telegram-ui'
import { useLaunchParams } from '@telegram-apps/sdk-react'
import HomePage from '../components/homepage/HomePage'
import Layout from '../components/layout/Layout'
import { useCallback, useState,useEffect } from 'react'

const Home = () => {

    const [isLayoutReady, setIsLayoutReady] = useState(false)

    useEffect(() => {
      setIsLayoutReady(true)
    }, [setIsLayoutReady])

  // WalletConnect - Wagmi
  // https://wagmi.sh/react/getting-started
  // const { address, isConnected } = useAccount()
  // const { open } = useWeb3Modal()

  // TonConnect
  // https://docs.ton.org/develop/dapps/ton-connect/react
  // const wallet = useTonWallet()
  // const userFriendlyAddress = useTonAddress()

  // const lp = useLaunchParams()

  // console.log('Launch params:', lp)
  // console.log('Wagmi:', address, isConnected)
  // console.log('TON:', wallet)
  return (
    // <Page>
    //   <LargeTitle weight="1">Web3 - Telegram Mini App</LargeTitle>
    //   <br />
    //   <Text>Wagmi:</Text>
    //   <br />
    //   <Button onClick={() => open()}>
    //     <span>{isConnected ? 'Open Profile' : 'Connect WalletConnect'}</span>
    //   </Button>
    //   <br />
    //   <Text>
    //     {address} {isConnected}
    //   </Text>
    //   <hr />
    //   <Text>TON:</Text>
    //   <br />
    //   <div style={{ margin: 'auto', width: 'fit-content' }}>
    //     <TonConnectButton />
    //   </div>
    //   <Text>{userFriendlyAddress}</Text>
    //   <Text>{JSON.stringify(wallet)}</Text>
    //   <hr />
    //   <Text>Launch params: {JSON.stringify(lp)}</Text>
    // </Page>

    <Layout>
      {isLayoutReady && <HomePage/>}
    </Layout>
    
  )
}

export default Home
