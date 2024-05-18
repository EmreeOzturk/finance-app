import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
const NewAccountSheet = () => {
  return (
    <Sheet open>
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
