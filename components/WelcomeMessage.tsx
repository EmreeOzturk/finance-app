"use client";
import { useUser } from "@clerk/nextjs";
const WelcomeMessage = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl md:text-4xl text-zinc-300 font-medium">
        Welcome Back {isLoaded ? ", ": " "}{user?.firstName} 🤙
      </h2>
      <p className="text-sm md:text-base text-blue-300">
        This is your Financial Overview Report
      </p>
    </div>
  );
};

export default WelcomeMessage;
