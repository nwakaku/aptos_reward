import { Wallet, GitGraph } from "lucide-react";

export function StatsCard() {
  return (
    <div className="flex items-center gap-4">
      <div className="p-4 shadow-sm rounded-md border space-y-2 ">
        <h2 className="text-md md:text-lg text-slate-500">Available Funds</h2>
        <div className="flex justify-between items-center">
          <h1 className="md:text-2xl text-black font-bold md:font-medium">0.009 ETH</h1>
          <Wallet className="h-6 w-6 text-lime-200 font-bold" />
        </div>
        <p className="text-sm text-slate-400">Total rewards of all repositories</p>
      </div>
      <div className="p-4 shadow-sm rounded-md border space-y-2">
        <h2 className="text-md md:text-lg text-slate-500">Repositories</h2>
        <div className="flex justify-between items-center">
          <h1 className="md:text-2xl text-black font-bold md:font-medium">187</h1>
          <GitGraph className="h-6 w-6 text-blue-300 font-bold" />
        </div>
        <p className="text-sm text-slate-400">Total repositories in the organisation</p>
      </div>
    </div>
  );
}
