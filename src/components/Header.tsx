import { ModeToggle } from "./mood-toggler";
import { WalletSelector } from "./WalletSelector";

export function Header() {
  // max-w-screen-xl
  return (
    <div className="flex items-center justify-between px-4 py-3  mx-auto w-full flex-wrap shadow-md">
      <h1 className="heading-sm">Aptos Reward</h1>

      <div className="flex gap-2 items-center flex-wrap">
        <WalletSelector />
        <ModeToggle/>
      </div>
     
    </div>
  );
}
