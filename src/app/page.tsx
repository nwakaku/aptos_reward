"use client";

import Features from "@/components/landing/Features";
import Potential from "@/components/landing/Potential";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";

function App() {
  return (
    <>
      <div className="overflow-y-auto md:overflow-y-hidden md:flex flex-col md:flex-row relative h-screen justify-between items-center">
        <div className="w-full xl:w-2/4 h-full py-6 px-4 md:px-1 flex">
          <div>
            <div>
              {" "}
              <h1 className="text-md md:text-xl font-inter font-semibold">Aptos_Reward</h1>
            </div>
            <div className="flex justify-start items-center  w-full md:px-8 py-12">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-7xl text-slate-500">
                  Revolutionize the Way Open-Source Projects are <span className="text-lime-300">Funded</span> and{" "}
                  <span className="text-lime-300">Rewarded</span>
                </h1>

                <p className="text-slate-500 text-xl">
                  Aptos_Rewards is a groundbreaking platform that bridges the gap between organizations and open-source
                  developers, enabling a more rewarding and transparent ecosystem for collaborative software
                  development.
                </p>

                <div>
                  <Link href="/home">
                    <Button
                      size="sm"
                      className="px-12 font-semibold bg-lime-800 text-white hover:text-white hover:bg-lime-800"
                    >
                      Launch App
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:px-12 md:py-12">
              <div className="flex justify-between items-center gap-2">
                <div className="space-y-2">
                  <h4 className="text-slate-500 font-medium">Awarded</h4>
                  <p className="text-sm md:text-xl">
                    <span className="font-semibold">2,123</span> Bounties
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-slate-500 font-medium">Totalling</h4>
                  <p className="text-sm md:text-xl font-semibold">$269,738 .00</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-slate-500 font-medium">To</h4>
                  <p className="text-sm md:text-xl">
                    <span className="font-semibold">487</span> Contributors
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-slate-500 font-medium">From</h4>
                  <p className="text-sm md:text-xl">
                    <span className="font-semibold">64</span> Countries
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 absolute bottom-0">
            <p className="text-sm text-slate-500 text-center">
              {new Date().getFullYear()} Aptops_Rewards, Public Benefits Corporation
            </p>
          </div>
          <aside
            className="relative flex-auto border-e border-lime-300 hidden md:block  w-1/4"
            // style={{
            //   background:
            //     "linear-gradient(to left, rgba(192,255,102,1) 0%, rgba(192,255,102,0.8) 20%, rgba(0,0,0,0.8) 50%)",
            // }}
          ></aside>
        </div>
        <div className="flex w-full h-full xl:w-2/4 flex-col items-center py-12 px-4">
          <div className="w-full flex justify-center items-center">
            <Tabs defaultValue="feature" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="feature" className="w-1/2   data-[state=active]:text-lime-300">
                  Features
                </TabsTrigger>
                <TabsTrigger value="potential" className="w-1/2  data-[state=active]:text-lime-300">
                  Open Source Potentials
                </TabsTrigger>
              </TabsList>
              <TabsContent value="feature" className="py-4">
                <Features />
              </TabsContent>
              <TabsContent value="potential" className="py-4">
                <Potential />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
