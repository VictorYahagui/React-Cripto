//Motion
import { motion } from "framer-motion";

//Variant
import { fadeIn } from '../variants'

//Icons
import { ChartBar, Globe, Users } from "phosphor-react";


export function Stats() {
    return (
        <motion.section
            variants={fadeIn('up', 0.6)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className="pt-24">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
                    {/* Item */}
                    <div className="flex items-center gap-x-6">
                        {/* Item Icon */}
                        <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue lg:text-4xl">
                            <ChartBar size={24} />
                        </div>
                        {/* Item Text */}
                        <div>
                            <div className="text-2xl font-bold lg:text-4xl lg:mb-2">$30B</div>
                            <div className="text-gray">Moedas Digitais Trocadas</div>
                        </div>
                    </div>
                    {/* Item */}
                    <div className="flex items-center gap-x-6">
                        {/* Item Icon */}
                        <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue lg:text-4xl">
                            <Users size={24} />
                        </div>
                        {/* Item Text */}
                        <div>
                            <div className="text-2xl font-bold lg:text-4xl lg:mb-2">$10M+</div>
                            <div className="text-gray">Carteiras Confiaveis</div>
                        </div>
                    </div>
                    {/* Item */}
                    <div className="flex items-center gap-x-6">
                        {/* Item Icon */}
                        <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue lg:text-4xl">
                            <Globe size={24} />
                        </div>
                        {/* Item Text */}
                        <div>
                            <div className="text-2xl font-bold lg:text-4xl lg:mb-2">195</div>
                            <div className="text-gray">Continentes Suportados</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}