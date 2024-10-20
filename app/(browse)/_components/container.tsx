"use client"

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { Children, useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

interface ContainerProps{
    children : React.ReactNode;
};

export const Conatiner = ({
    children
}: ContainerProps) =>{

    const {
        Collapsed,
        onExapnd,
        onCollapse
    } = useSidebar((state) => state);
    const matches = useMediaQuery("{max-width : 1024px}");
    useEffect(()=>{
     if(matches){
        onCollapse()
     }
     else{
        onExapnd()
     }
    },[matches,onCollapse,onExapnd])
  return(
    <div className= {cn(
        "flex-1",
        Collapsed ? "ml=[70px]" : "ml-[70px] lg:ml-60"
    )}>
        {children}
    </div>
  )
}