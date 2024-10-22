import { Children, Suspense } from "react";
import { Navbar } from "./_components/navbar";
import { Sidebar, SiderbarSkeleton } from "./_components/navbar/Sidebar";
import { Wrapper } from "./_components/navbar/Sidebar/Wrapper";
import { Conatiner } from "./_components/container";

const BrowseLayout = (
    { Children,

    }: {
        Children: React.ReactNode
    }) => {
    return (
        <>
            <Navbar />
            <div className="flex h-full pt-20">
  <Suspense fallback={<SiderbarSkeleton/>} >
  <Sidebar />
  </Suspense>
                
                    
                <Conatiner >
                {Children}
                </Conatiner>
            </div>
        </>
    )
}

export default BrowseLayout