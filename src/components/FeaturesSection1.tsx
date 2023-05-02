//Img
import Img1 from '../assets/feature-1-img.png'

//Motion
import { motion } from "framer-motion";

//Variant
import { fadeIn } from '../variants'

export function FeaturesSection1() {
    return (
        <section className='pb-[1.87rem] lg:pb-[7.5rem] pt-0'>
            <div className='flex flex-col lg:flex-row'>
                {/* text */}
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className='max-w-[28rem] mb-6 lg:mt-10'>
                    <h3 className='h3 mb-6'>Invest Smart</h3>
                    <p className='text-gray mb-8'>
                        obtenha informações estatísticas completas sobre o comportamento dos compradores e vendedores ajudará você a tomar a decisão
                    </p>
                    <button className='btn px-8'>Leia mais</button>
                </motion.div>
                {/* IMG */}
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className='flex-1 flex justify-end'>
                    <img src={Img1} alt="" />
                </motion.div>
            </div>
        </section>
    )
}