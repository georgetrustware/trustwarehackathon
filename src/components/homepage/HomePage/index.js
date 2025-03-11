// pages/index.js (or wherever HomePage is located)
import { Button } from '@telegram-apps/telegram-ui';
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useCallback } from 'react';
import Image from 'next/image';


function HomePage() {
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();

  const handleConnectClick = useCallback(() => {
    open();
  }, [open]);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Logo Section */}
      <div className="flex-1 flex-col flex items-center justify-center w-full max-w-lg mx-auto">
        <div className="relative w-full aspect-[3/4] flex items-center justify-center">
          {/* Hermes Logo */}
          <div className="relative w-full max-w-xs">
            <img
              src="/hackathonlogo.JPG" // Correct static path from /public
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
  );
}

export default HomePage;