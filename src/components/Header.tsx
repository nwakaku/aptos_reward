import { ModeToggle } from "./mood-toggler";
import { WalletSelector } from "./WalletSelector";
import { LoginDrawer, OpenDrawerButton } from './home/LoginDrawer';

export function Header() {
  return (
    <div className="flex items-center justify-between py-3 px-2 mx-auto w-full flex-wrap shadow-md">
      <h1 className="text-md md:text-xl font-inter font-semibold">Aptos_Reward</h1>

      <div className="flex gap-2 items-center flex-wrap">
        <WalletSelector />
        <div>
          {" "}
          <LoginDrawer openDrawerButton={<OpenDrawerButton />}/>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}
