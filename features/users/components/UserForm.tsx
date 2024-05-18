import { z } from "zod";
import { Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { insertUserSchema } from "@/db/schema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = insertUserSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

type Props = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
};
const UserForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleSubmit = (values: FormValues) => {
    console.log({ values });
  };

  const handleDelete = () => {
    onDelete?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel htmlFor={field.name}>Name</FormLabel>
                <FormControl>
                  <Input
                    disabled={disabled}
                    placeholder="e.g Cash, Bank, Credit Card"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full" disabled={disabled}>
          {id ? "Update" : "Create"}
        </Button>
        {!!id && (
          <Button
            variant="outline"
            type="button"
            className="w-full"
            disabled={disabled}
            onClick={handleDelete}
          >
            <Trash className="size-4" />
            <div className="ml-2">Delete</div>
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserForm;
