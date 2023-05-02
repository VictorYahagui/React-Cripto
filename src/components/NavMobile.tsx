
//icons
import { X } from "phosphor-react";

import { navDatas } from "../data/navDatas";

type NavMobileProps = {
    onOpen: (isOpen: boolean) => void,
}

export function NavMobile(props: NavMobileProps) {
    return (
        <nav className="lg:hidden bg-violet h-full top-0 bottom-0 w-80 flex items-center justify-center">
            {/* Close Btn */}
            <div
                onClick={() => props.onOpen(false)} className="absolute top-4 left-4 cursor-pointer">
                <X size={28} />
            </div>
            {/* Menu List */}
            <ul className="text-xl flex flex-col gap-y-8">
                {navDatas.map((navData) => {
                    return (
                        <li key={navData.id}>
                            <a href={navData.href}>{navData.name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}