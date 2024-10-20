"use client"

import { usePathname } from "next/navigation";

import {cn} from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import Link from "next/link";
import { UserAvatar } from "@/components/user-avatar";

interface UserItemProps{
    username : string;
    imageUrl : string;
    isLive? : boolean;
}

export const UserItem = ({username,imageUrl,isLive}:UserItemProps) =>{

    const pathname = usePathname();
    const {Collapsed} = useSidebar((state) => state)

    const href = `/${username}`;
    const isActive = pathname === href;
    return (
        <Button
        asChild
        variant="ghost"
        className={cn(
            "w-full h-12",
            Collapsed ? "justify-center" : "justify-start",
            isActive && "bg-accent"
        )}
        >
         <Link href={href}>
           <div className={cn(
            "flex items-center w-full gap-x-4 ",
            Collapsed &&  "justify-center"
           )}>
           <UserAvatar 
            imageUrl = {imageUrl}
            username = {username}
            isLive = {isLive}
            showBadge
           />
           </div>
         </Link>
        </Button>
    )
}