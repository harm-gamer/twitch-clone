"use client"

import { cn } from "@/lib/utils"
import { useSidebar } from "@/store/use-sidebar"
import { useEffect, useState } from "react"
import { ToggleSkeleton } from "./toggle"
import { RecommendedSkeleton } from "./recommrnded"
import { useIsClient } from "usehooks-ts"

interface WrapperProps{
    children : React.ReactNode
}

export const Wrapper = ({children}:WrapperProps) =>{
    
    const isClient = useIsClient();
    const { Collapsed }= useSidebar((state) => state)

    

    // {!isClient} {
    //     return (
    //     <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
    //       <ToggleSkeleton/>
    //       <RecommendedSkeleton />
    //     </aside>
    // )}
    return (
        <div>
            <aside
            className={cn("fixed left-0 flex flex-col  h-full bg-background border-r border-[#2D2E35] z-50",
                Collapsed && "w-[720]"
            )}
            >
         {children}
         </aside>
        </div>
    )
}