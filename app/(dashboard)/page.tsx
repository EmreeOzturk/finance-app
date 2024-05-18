"use client";

import { Button } from "@/components/ui/button";
import { useNewUser } from "@/features/users/hooks/useNewUser";
export default function Home() {
  const { onOpen } = useNewUser();
  return (
    <div>
      <Button
        onClick={() => {
          onOpen();
        }}
      >
        Add an user
      </Button>
    </div>
  );
}
