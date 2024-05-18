import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { useNewUser } from "../hooks/useNewUser";
import UserForm from "./UserForm";
const NewUserSheet = () => {
  const { isOpen, onClose } = useNewUser();
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>Create an user</SheetTitle>
          <SheetDescription>
            Enter your details below to create a new user.
          </SheetDescription>
        </SheetHeader>
        <UserForm onSubmit={() => {}} disabled={false} />
      </SheetContent>
    </Sheet>
  );
};

export default NewUserSheet;
