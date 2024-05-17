import Link from "next/link";
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
    <Link
      className={`text-zinc-300 hover:scale-105 transition-all dura ${
        isActive && "text-blue-400"
      } `}
      href={href}
    >
      {label}
    </Link>
  );
};

export default NavButton;
