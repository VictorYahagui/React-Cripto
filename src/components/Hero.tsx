
//Img
import Img from '../assets/hero-img.png'

//Icons
import { ArrowCircleRight } from 'phosphor-react'

//motion
import { motion } from "framer-motion";

//variant
import { fadeIn } from '../variants'

export function Hero() {
    return (
        <section>
            <div className='container mx-auto'>
                <div

                    className='flex flex-col items-center lg:flex-row'>
                    {/* Hero Text */}
                    <motion.div
                        variants={fadeIn('down', 0.3)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className='flex-1'>
                        {/* Descritivo */}
                        <div className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[22.8rem]'>
                            <div className='flex items-center justify-between text-sm lg:text-base'>
                                <div className='bg-white text-darkblue rounded-full font-medium py-1 px-4'>
                                    75% save
                                </div>
                                <div>
                                    Black Friday
                                </div>
                            </div>
                        </div>

                        {/* Titulo */}
                        <h1
                            className='text-[2rem] lg:text-[4rem] font-bold leading-tight mb-6'>
                            Rapido e Seguro pataforma de investimento em cripto
                        </h1>
                        <p
                            className='max-w-[27.5rem] leading-relaxed mb-8'>
                            Compra e venda de cripto moedas
                        </p>
                        <button
                            className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base'>
                            Experimente Gratuitamente
                            <ArrowCircleRight size={28} className='lg:text-3xl' />
                        </button>
                    </motion.div>
                    {/* Hero Img */}
                    <motion.div
                        variants={fadeIn('up', 0.4)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className='flex-1'>
                        <img src={Img} alt="Crypto Img" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}