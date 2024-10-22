"use client"

import { usePathname } from "next/navigation";

import {cn} from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar";
import Link from "next/link";
import { UserAvatar } from "@/components/user-avatar";
import { LiveBadge } from "@/components/live-Badge";
import { EclipseIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

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
           {!Collapsed && (
            <p className="truncate">
                {username}
            </p>
           )}
           {!Collapsed && isLive && (
            <LiveBadge  className="ml-auto"/>
           )}
           </div>
         </Link>
        </Button>
    )
}

export const UserItemSkeleton = () =>{
    return (
        <li className="flex items-center gap-x-4 px-3 py-2">
            
            <Skeleton  className="m-h-[32px] min-w-[32px] rounded-full"/>
            <div className="flex-1">
                <Skeleton className="h-6"/>
            </div>
        </li>
    )
}