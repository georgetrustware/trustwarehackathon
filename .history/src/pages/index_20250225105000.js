import { ConnectButton } from 'thirdweb/react';

export default function Home() {
  return (
    <div>
      <h1>My Telegram Mini App</h1>
      <ConnectButton
        client={{ clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID }}
      />
    </div>
  );
}