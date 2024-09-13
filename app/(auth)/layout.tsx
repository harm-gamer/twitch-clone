import { Logo } from "./_components/logo"


const AppLayout = ({
    children
}:{
    children : React.ReactNode
}) =>{
    return(
        <div className="h-full flex items-center flex-col justify-center">
            <Logo/>
         {children}
        </div>
    )
}

export default AppLayout