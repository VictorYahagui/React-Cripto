
//IMG

import Logo from '../assets/logo.svg'
import VisaImg from '../assets/visa.png'
import MastercardImg from '../assets/mastercard.png'
import BitcoinImg from '../assets/bitcoin.png'

//Icon
import { InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'


export function Footer() {
    return (
        <footer className='lg:pt-24 pt-0'>
            <div className="container mx-auto lg:mb-24">
                <div className='flex flex-col gap-12 lg:flex-row'>
                    {/* Logo */}
                    <div className='flex-1 mx-auto lg:mx-0 mb-6 max-w-[18rem]'>
                        <a href="#">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                    {/* Link */}
                    <div className='flex flex-1 flex-col gap-16 lg:flex-row'>
                        <div className='text-center w-full lg:text-left'>
                            <div className='text-xl font-medium mb-6'>
                                Links Rapidos
                            </div>
                            <ul className='space-y-4 text-gray'>
                                <li><a className='hover:text-blue-hover transition' href="#">Home</a></li>
                                <li><a className='hover:text-blue-hover transition' href="#">Produtos</a></li>
                                <li><a className='hover:text-blue-hover transition' href="#">Sobre</a></li>
                                <li><a className='hover:text-blue-hover transition' href="#">Atualizações</a></li>
                                <li><a className='hover:text-blue-hover transition' href="#">Contato</a></li>
                            </ul>
                        </div>
                        <div className='text-center w-full lg:text-left'>
                            <div className='text-xl font-medium mb-6'>
                                Recursos
                            </div>
                            <ul className='space-y-4 text-gray'>
                                <li><a className='hover:text-blue-hover transition' href="#">Download Whitepaper</a></li>
                                <li><a className='hover:text-blue-hover transition' href="#">Smart Token</a></li>
                                <li><a className='hover:text-blue-hover transition' href="#">Blockchain Explore</a></li>
                                <li><a className='hover:text-blue-hover transition' href="#">API</a></li>
                                <li><a className='hover:text-blue-hover transition' href="#">Interest </a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Pagamentos */}
                    <div className='flex flex-col flex-1'>
                        <div className='lg:ml-[5rem]' >
                            <h3 className='h3 font-medium text-center mb-10 lg:text-left'>
                                Tipos de pagamentos aceitos
                            </h3>
                            <div className='flex justify-center items-center gap-6'>
                                <img src={VisaImg} alt="" />
                                <img src={MastercardImg} alt="" />
                                <img src={BitcoinImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Social Media */}
            <div className='py-12'>
                <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
                    {/* Text */}
                    <div>
                        &#169; 2022 CRAPPO
                    </div>
                    {/* Social Icons */}
                    <div className='flex text-2xl gap-x-8'>
                        <a className='hover:text-blue transition' href="#">
                            <YoutubeLogo size={28} />
                        </a>
                        <a className='hover:text-blue transition' href="#">
                            <InstagramLogo size={28} />
                        </a>
                        <a className='hover:text-blue transition' href="#">
                            <TwitterLogo size={28} />
                        </a>
                        <a className='hover:text-blue transition' href="#">
                            <LinkedinLogo size={28} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}