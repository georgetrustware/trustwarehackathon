// pages/index.js (or wherever HomePage is located)
import { Button } from '@telegram-apps/telegram-ui'
import { useAccount } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useCallback } from 'react'
import Image from 'next/image'

import hackathonlogo from '/public/assets/hackathonlogo.jpg'

// import hackathonlogo from 'public/assets/hackathonlogo.jpg';

const IMAGE_PATH = '/assets/hackathonlogo.jpg'

function HomePage() {
  const { isConnected } = useAccount()
  const { open } = useWeb3Modal()

  const handleConnectClick = useCallback(() => {
    open()
  }, [open])

  return (
    <div className="flex h-full w-full flex-col">
      {/* Logo Section */}
      <div className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center">
        <div className="relative flex aspect-[3/4] w-full items-center justify-center">
          {/* Hermes Logo */}
          <div className="relative w-full max-w-xs">
            <Image
              src={hackathonlogo} // Correct static path from /public
              alt="Hermes Logo"
              className="h-auto w-full object-contain"
              height={0}
              width={0}
            />
          </div>
        </div>

        {!isConnected && (
          <Button className="w-2/3" onClick={handleConnectClick}>
            Connect WalletConnect
          </Button>
        )}
      </div>
    </div>
  )
}

export default HomePage
