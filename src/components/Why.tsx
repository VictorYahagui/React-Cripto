//Img

import Img from '../assets/why-img.png'

//motion
import { motion } from "framer-motion";

//variant
import { fadeIn } from '../variants'


export function Why() {
    return (
        <section className='section'>
            <div className="container mx-auto">
                <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
                    {/* Img */}
                    <motion.div
                        variants={fadeIn('right', 0.4)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='order-2 lg:order-1'>
                        <img src={Img} alt="" />
                    </motion.div>
                    {/* Text */}
                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='order-1 lg:order-2 max-w-[30rem]'>
                        <h2 className='section-title'>
                            Porque escolher a CRAPPO
                        </h2>
                        <p className='section-subtitle'>
                            Experimente a plataforma de criptomoedas da próxima geração. Sem fronteiras financeiras, taxas extras e avaliações falsas
                        </p>
                        <button className='btn px-6'>Leia Mais</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}