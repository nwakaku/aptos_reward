import React from "react";
import { BookMarked, CodeXml, Gem, LogIn, UserRoundCog } from "lucide-react";

export default function Features() {
  return (
    <div className="py-2 grid grid-cols-2 gap-8">
      <div className="p-6 rounded-xl border border-lime-300  space-y-4">
        <div className="flex items-center gap-4">
          <CodeXml className="text-lime-300" size={"32px"} />
          <h2 className="text-lg font-medium">Developer Contributions</h2>
        </div>
        <p className="text-base text-slate-500">
          Developers can explore GitHub repositories, select issues to work on, and earn Aptos rewards for their
          contributions.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-lime-300 space-y-4">
        <div className="flex items-center gap-4">
          <LogIn className="text-lime-300" size={"32px"} />
          <h2 className="text-lg font-medium">Secure Login & Verification</h2>
        </div>
        <p className="text-base text-slate-500">
          GitHub login integration ensures that only unique, verified users participate, preventing Sybil attacks and
          ensuring trusted interactions.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-lime-300 space-y-4">
        <div className="flex items-center gap-4">
          <Gem className="text-lime-300" size={"32px"} />
          <h2 className="text-lg font-medium">Fund & Reward Management</h2>
        </div>
        <p className="text-base text-slate-500">
          Repository owners and pool managers can allocate Aptos tokens as rewards for specific issues, and the rewards
          are automatically distributed to contributors' wallets upon resolution.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-lime-300 space-y-4">
        <div className="flex items-center gap-4">
          <UserRoundCog className="text-lime-300" size={"32px"} />
          <h2 className="text-lg font-medium">User Roles</h2>
        </div>
        <p className="text-base text-slate-500">
          Pool Managers manage the rewards, while Contributors earn Aptos tokens by solving problems.
        </p>
      </div>

      <div className="p-6 rounded-xl border border-lime-300 space-y-4">
        <div className="flex items-center gap-4">
          <BookMarked className="text-lime-300" size={"32px"} />
          <h2 className="text-lg font-medium">Future Advancements</h2>
        </div>
        <p className="text-base text-slate-500">
          Implementing advanced fund distribution strategies to provide organizations with more control over reward
          allocation and distribution based on various governance models.
        </p>
      </div>
    </div>
  );
}
