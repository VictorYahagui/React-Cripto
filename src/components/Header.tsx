
//Components
import { Nav } from './Nav'
import { AccountBtns } from './AccountBtns'

//Img
import Logo from '../assets/logo.svg'
import { List } from 'phosphor-react'

type NavMobileProps = {
    onOpen: (isOpen: boolean) => void,
}

export function Header(props: NavMobileProps) {
    return (
        <header
            className='py-7 lg:pt-14'>
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <a href="#">
                    <img src={Logo} alt="" />
                </a>
                {/* Nav & Btn */}
                <div className='hidden lg:flex gap-x-14'>
                    <Nav />
                    <AccountBtns />
                </div>
                {/* Open Nav Btn */}
                <div onClick={() => props.onOpen(true)} className='lg:hidden cursor-pointer'>
                    <List size={24} />
                </div>
            </div>
        </header>
    )
}