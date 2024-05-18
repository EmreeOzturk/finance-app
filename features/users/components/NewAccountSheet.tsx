import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { useNewAccount } from "../hooks/useNewAccount";
const NewAccountSheet = () => {
    const {isOpen,onClose,onOpen} = useNewAccount();
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>Create an account</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          Enter your details below to create a new account.
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default NewAccountSheet;
