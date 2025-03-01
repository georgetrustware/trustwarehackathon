import { Button } from '@telegram-apps/telegram-ui'
import { useAccount } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useCallback } from 'react'
// Import the logo image (adjust the path according to your project structure)
import HermesLogo from '../../../public/hackathonlogo.JPG' // Adjust path if needed

function HomePage() {
  const { isConnected } = useAccount()
  const { open } = useWeb3Modal()

  const handleConnectClick = useCallback(() => {
    open()
  }, [open])

  return (
    <div className="flex flex-col h-full w-full">
      {/* Logo Section */}
      <div className="flex-1 flex-col flex items-center justify-center w-full max-w-lg mx-auto">
        <div className="relative w-full aspect-[3/4] flex items-center justify-center">
          {/* Hermes Logo */}
          <div className="relative w-full max-w-xs">
            <img
              src={HermesLogo} // Use the imported image variable
              alt="Hermes Logo"
              className="w-full h-auto object-contain"
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