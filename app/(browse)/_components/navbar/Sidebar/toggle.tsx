"use client"
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
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