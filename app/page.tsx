import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-red-500 font-bold">
       <h1>Dashboard</h1>
       <UserButton afterSignOutUrl="/"/>
      </div>
     
  );
}
