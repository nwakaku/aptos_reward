import * as React from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { UserRoundCheck, UsersRound } from "lucide-react";

export function LoginDrawer({ openDrawerButton }: any) {
  return (
    <Drawer>
      {openDrawerButton}

      <DrawerContent>
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle className="text-center text-xl">Register/Login as</DrawerTitle>
            <div className="absolute top-0 right-0">
              <DrawerClose asChild>
                <Button variant="ghost" className="text-red-400 font-semibold">
                  Cancel
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>
          <div className="py-12 md:px-4 flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full  h-2/3 bg-white shadow-sm space-y-6 py-6 px-2 cursor-pointer">
                <h2 className="text-black text-lg text-center font-medium">Pool Manager</h2>
                <div className="flex justify-center items-center">
                  <div className="rounded-full h-12 w-12 bg-lime-300 flex justify-center items-center">
                    <UsersRound />
                  </div>
                </div>
                <p className="text-sm text-slate-400 text-center">
                  Create and manage grant pools for your Github organisation
                </p>
              </div>
              <div className="w-full  h-2/3 bg-white shadow-sm space-y-6 py-6 px-2 cursor-pointer">
                <h2 className="text-black text-lg text-center font-medium">Contributor</h2>
                <div className="flex justify-center items-center">
                  <div className="rounded-full h-12 w-12 bg-purple-300 flex justify-center items-center">
                    <UserRoundCheck />
                  </div>
                </div>
                <p className="text-sm text-slate-400 text-center">Register as contributor and start developing</p>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export const OpenDrawerButton = () => {
  return (
    <DrawerTrigger asChild>
      <Button size="sm">Login</Button>
    </DrawerTrigger>
  );
};
