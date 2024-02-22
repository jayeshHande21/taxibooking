import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <h1>Welcomme to the Real World</h1>
      <UserButton />
    </div>
  );
}
