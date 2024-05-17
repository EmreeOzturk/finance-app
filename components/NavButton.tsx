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
    <Link className={`text-zinc-500 hover:text-zinc-700 ${isActive && 'text-blue-400'} `} href={href}>
      {label}
    </Link>
  );
};

export default NavButton;
