"use server";

import Image from "next/image";
import LoginForm from "@/app/(auth)/components/login-form";
import LoginCard from "@/app/(auth)/components/login-card";
import GateHeader from "./components/gate-header";
import GateYoutube from "./components/gate-youtube";

export default async function Home() {
  return (
    <div className="px-5 relative">
      <div className="sm:grid sm:grid-cols-2 min-h-screen sm:gap-6 md:gap-20 w-full sm:w-fit mx-auto py-5">
        <div className="w-full flex justify-center items-center gap-10 flex-col z-1 sm:relative absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <GateHeader className="bg-black/70 sm:bg-transparent text-white sm:text-black p-4 rounded-xl" />
          <LoginCard className="max-w-xs bg-white/90 shadow-xl shadow-white/40 sm:shadow-black/10">
            <div className="relative">
              <div className="blur pointer-events-none">
                <LoginForm />
              </div>
              <div className="border border-secondary p-6 bg-white absolute z-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 rounded-xl">
                <p className="text-black font-medium text-sm whitespace-nowrap">
                  Login will be available soon.
                </p>
              </div>
            </div>
          </LoginCard>
        </div>
        <div
          className="flex justify-center items-center absolute sm:relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
          style={{
            zIndex: -1,
          }}
        >
          <GateYoutube />
        </div>
      </div>
    </div>
  );
}
