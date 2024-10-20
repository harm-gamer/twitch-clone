import { getRecommended } from "@/lib/recommended-service"
import { Recommended } from "./recommrnded"
import { Toggle } from "./toggle"
import { Wrapper } from "./Wrapper"

export const Sidebar = async ()=>{

    const recommended = await getRecommended();
    return(
       <Wrapper>
        <Toggle />
        <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended  data={recommended}/>
        </div>
       </Wrapper>
    )
}