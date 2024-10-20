import { Children } from "react";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/navbar/Sidebar";
import { Wrapper } from "./_components/navbar/Sidebar/Wrapper";

const BrowseLayout = (
    { Children,

    }: {
        Children: React.ReactNode
    }) => {
    return (
        <>
            <Navbar />
            <div className="flex h-full pt-20">

                
                    <Sidebar />
                
                {Children}
            </div>
        </>
    )
}

export default BrowseLayout