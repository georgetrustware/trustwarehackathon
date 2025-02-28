
import { Button} from '@telegram-apps/telegram-ui'
import { useAccount } from 'wagmi'
import { useWeb3Modal } from '@web3modal/wagmi/react'





const Home = () => {
    const { address, isConnected } = useAccount()
    const { open } = useWeb3Modal()
  return (
    <div className="flex flex-col h-full w-full">
      {/* Logo Section */}
      <div className="flex-1 flex-col flex items-center justify-center w-full max-w-lg mx-auto">
        <div className="relative w-full aspect-[3/4] flex items-center justify-center">
          {/* Hermes Logo */}
          <div className="relative w-full max-w-xs">
            <img
              src="/lovable-uploads/531a3c87-62fd-4e13-91b0-935c371f420c.png"
              alt="Hermes Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

    <div className='w-2/3'>
    {!isConnected&&<Button onClick={() => open()}>
      Connect WalletConnect
    </Button> }    
    </div>
      </div>


    {/* Navigation Bar */} 
    </div>
  );
};

export default Home;