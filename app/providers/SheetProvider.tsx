"use client";

import NewUserSheet from "@/features/users/components/NewUserSheet";
import { useMountedState } from "react-use";
const SheetProvider = () => {
  const mounted = useMountedState();

  if (!mounted) return null;
  return (
    <>
      <NewUserSheet />
    </>
  );
};

export default SheetProvider;
