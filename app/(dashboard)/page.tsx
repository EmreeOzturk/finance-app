import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <p>This is authenticated route</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
