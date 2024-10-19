import { Children } from "react";
import { Navbar } from "./_components/navbar";

const BrowseLayout = ({Children}:{Children : React.ReactNode}) =>{
    return (
        <>
        <Navbar/>
        <div className="flex h-full pt-20">
     {Children}
        </div>
        </>
    )
}

export default BrowseLayout