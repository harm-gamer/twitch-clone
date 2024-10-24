"use client"
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSidebar } from "@/store/use-sidebar"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

export const Toggle = () =>{
    const {
        Collapsed,
        onExapnd,
        onCollapse
    } = useSidebar((state) => state)

    const label = Collapsed ? "Exapnd" : "Collapse";

    return (
        <>
        {Collapsed && (
            <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                <Hint side="right" label={label} asChild>

                
            <Button onClick={onExapnd} variant="ghost" className="h-auto p-2">
                <ArrowRightFromLine className="h-4 w-4"/>
            </Button>
            </Hint>
            </div>
        )}
        {!Collapsed && (
            <div className="p-3 pl-6 mb-2 flex items-center w-full">
                <p className="font-semibold text-primary">
              For You
                </p>
                <Hint label={label} side="right" asChild>
                <Button
                onClick={onCollapse}
                className="h-auto p-2 ml-auto"
                variant="ghost"
                >
              <ArrowLeftFromLine className="h-4 w-4 " />
                </Button>
                </Hint>
            </div>
        )}
        </>
    )
}
export const ToggleSkeleton = () =>{
    return (
        <div className="p-3 pl-6 mb-2 hidden lg:flex  items-center justify-between w-full">
            <Skeleton  className="h-6 w-[100px]"/>
        <Skeleton className="h-6 w-6"/>
        </div>
    )
}