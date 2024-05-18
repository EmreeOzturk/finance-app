"use client";

import NewAccountSheet from "@/features/users/components/NewAccountSheet";
import { useMountedState } from "react-use";
const SheetProvider = () => {
  const mounted = useMountedState();

  if (!mounted) return null;
  return (
    <>
      <NewAccountSheet />
    </>
  );
};

export default SheetProvider;
