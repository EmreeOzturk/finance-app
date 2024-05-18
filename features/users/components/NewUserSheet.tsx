import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { useNewUser } from "../hooks/useNewUser";
import UserForm from "./UserForm";
import { insertUserSchema } from "@/db/schema";
import { z } from "zod";
import { useCreateUser } from "../api/useCreateUser";
const formSchema = insertUserSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;
const NewUserSheet = () => {
  const { isOpen, onClose } = useNewUser();
  const mutation =  useCreateUser();
  const onSubmit = (values: FormValues) => {
    mutation.mutate(values);
  };
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>Create an user</SheetTitle>
          <SheetDescription>
            Enter your details below to create a new user.
          </SheetDescription>
        </SheetHeader>
        <UserForm onSubmit={onSubmit} disabled={false} 
          defaultValues={{
            name: "",
          }}
        />
      </SheetContent>
    </Sheet>
  );
};

export default NewUserSheet;
