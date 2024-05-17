import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
const NavButton = ({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive?: boolean;
}) => {
  return (
    <Button
      asChild
      size="sm"
      variant="outline"
      className={cn(
        "w-full text-white justify-between font-normal hover:text-white   outline-none border-none hover:bg-white/20",
        isActive ? "bg-white/10" : "bg-transparent"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default NavButton;
