import React from "react";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center md:gap-x-16">
            <HeaderLogo />
            <Navbar />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-slate-400" size={32} />
          </ClerkLoading>
        </div>
      </div>
    </header>
  );
};

export default Header;
