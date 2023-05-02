
//Data

import { navDatas } from "../data/navDatas"

export function Nav() {
    return (
        <nav className="flex items-center">
            <ul className="flex gap-x-8">
                {navDatas.map((navData) => {
                    return (
                        <li className="border-b-2 border-transparent hover:border-blue transition-all duration-300" key={navData.id}>
                            <a href={navData.href}>{navData.name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}