import { create } from "zustand"


interface Sidebarstore{
    Collapsed : boolean,
    onExapnd : () => void,
    onCollapse : () => void
}

export const useSidebar = create<Sidebarstore>((set) => ({
    Collapsed : false,
    onExapnd : () => set(() =>({Collapsed : false})),
    onCollapse : () => set(() => ({Collapsed : true}))
}))