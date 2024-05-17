"use client";

import NavButton from "./NavButton";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMedia } from "react-use";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
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
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 768px)", false);
  const pathname = usePathname();
  const onClickHandler = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen((prev) => !prev)}
            className="border-none text-white font-normal bg-white/10 hover:bg-white/20"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.label}
                variant={route.href === pathname ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => onClickHandler(route.href)}
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
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
