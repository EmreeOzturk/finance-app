import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center lg:flex hidden">
        <Image src="/logo.svg" alt="logo" height={28} width={28} />
        <p className="font-semibold text-zinc-300 text-2xl ml-2.5">Finance</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
