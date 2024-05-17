import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Image from "next/image";
import { Loader } from "lucide-react";
export default function Page() {
  return (
    <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="font-bold text-3xl text-zinc-800">Welcome Back!</h1>
        <p className="my-3 text-zinc-500">
          Log in or create account to get back to your dashboard
        </p>
        <ClerkLoaded>
          <SignUp path="/sign-up" routing="path" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader size={32} className="animate-spin" />
        </ClerkLoading>
      </div>
      <div className="hidden h-screen lg:flex bg-emerald-800 lg:justify-center lg:items-center">
        <Image src={"/logo.svg"} alt="logo" width={250} height={250} />
      </div>
    </div>
  );
}
