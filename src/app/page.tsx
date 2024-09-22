"use client";

import { AccountInfo } from "@/components/AccountInfo";
import { Header } from "@/components/Header";
import { MessageBoard } from "@/components/MessageBoard";
import { NetworkInfo } from "@/components/NetworkInfo";
import { TransferAPT } from "@/components/TransferAPT";
import { WalletDetails } from "@/components/WalletDetails";
import { Search } from "@/components/home/Search";
import { StatsCard } from "@/components/home/StatsCard";
import { Button } from "@/components/ui/button";
import { Gem } from "lucide-react";

// Internal Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

function App() {
  const { connected } = useWallet();

  return (
    <>
      <Header />
      <div className="">
        {connected ? (
          <div className="flex items-center justify-center flex-col">
            <Card>
              <CardContent className="flex flex-col gap-10 pt-6">
                <WalletDetails />
                <NetworkInfo />
                <AccountInfo />
                <TransferAPT />
                <MessageBoard />
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="py-4 px-2">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <Search />
              <Button size="sm">
                <Gem className="mr-2 h-4 w-4" />
                View Attestation
              </Button>
            </div>
            <div className="py-4">
              <StatsCard />
            </div>
          </div>
          // <CardHeader>
          //   <CardTitle>To get started Connect a wallet</CardTitle>
          // </CardHeader>
        )}
      </div>
    </>
  );
}

export default App;
