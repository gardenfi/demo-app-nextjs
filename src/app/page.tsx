"use client";

import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import WalletConnectComponent from "./components/wallet/WalletConnectComponent";

const Home = () => {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.push("/swap");
    }
  }, [isConnected, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <WalletConnectComponent />
    </div>
  );
};

export default Home;
