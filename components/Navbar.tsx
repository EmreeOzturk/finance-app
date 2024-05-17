"use client";

import NavButton from "./NavButton";
import { usePathname } from "next/navigation";
import  {Sheet,SheetContent,SheetTrigger} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
const routes = [
  { href: "/", label: "Overview" },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  {
    href: "/settings",
    label: "Settings",
  },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.label}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};

export default Navbar;
