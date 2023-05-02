//Img
import Img3 from '../assets/feature-3-img.png'

//Motion
import { motion } from "framer-motion";

//Variant
import { fadeIn } from '../variants'

export function FeaturesSection3() {
    return (
        <section className='py-[1.87rem] lg:py-[7.5rem]'>
            <div className='flex flex-col lg:flex-row'>
                {/* text */}
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className='max-w-[28rem] mb-6 lg:mt-10'>
                    <h3 className='h3 mb-6'>Aumente seu lucro e acompanhe seus investimentos</h3>
                    <p className='text-gray mb-8 max-w-[25.5rem]'>
                        Use ferramentas analíticas avançadas gráficos claros de visualização de negociação permitem que você rastreie investimentos de lucro atuais e históricos
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
                    <img src={Img3} alt="" />
                </motion.div>
            </div>
        </section>
    )
}