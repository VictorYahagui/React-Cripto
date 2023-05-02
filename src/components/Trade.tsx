import { useState } from "react";

//motion
import { motion } from "framer-motion";

//variant
import { fadeIn } from '../variants'

//Data
import { currenciesData } from '../data/currencyData'

//Icon
import { CaretRight, Divide } from "phosphor-react";

export function Trade() {
    //item name state

    const [itemName, setItemName] = useState('Bitcoin')

    return (
        <section className="section lg:pt-[20rem] bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[20rem]">
            <div className="container mx-auto">
                <motion.h2
                    variants={fadeIn('up', 0.4)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.5 }}
                    className='section-title text-center mb-16'>
                    Negocie segurança e comercialize a criptomoeda de alto crescimento</motion.h2>
                {/* items */}
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.5 }}
                    className="flex flex-col gap-11 lg:flex-row">
                    {currenciesData.map((currency) => {
                        return (
                            <div
                                onClick={() => { setItemName(currency.name) }}
                                className={`${currency.name === itemName ? 'bg-violet text-white' : 'bg-white'} w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                                key={currency.id}>
                                <div className="flex flex-col justify-center items-center">
                                    {/* Item IMG */}
                                    <img className="mb-12" src={currency.image} alt={currency.name} />
                                    {/* Item Name */}
                                    <div className="mb-4 flex items-center gap-x-2">
                                        <div className="text-[2rem] font-bold">
                                            {currency.name}
                                        </div>
                                        <div className="text-lg text-gray-400 font-medium">
                                            {currency.abbr}
                                        </div>
                                    </div>
                                    {/* Item Description */}
                                    <p className="mb-6 text-center">
                                        {currency.description}
                                    </p>
                                    {/* BTN */}

                                    <button
                                        className={`${currency.name === itemName ? 'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3' : 'text-blue w-16'} border-2 border-gray-300 rounded-full h-16 flex justify-center items-center`}>
                                        {currency.name === itemName && <div className="text-lg font-medium"> Começe a Minerar</div>}
                                        <CaretRight size={28} className={`${currency.name === itemName ? 'text-2xl' : 'text-3xl'}`} />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}