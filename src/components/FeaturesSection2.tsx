//Img
import Img2 from '../assets/feature-2-img.png'

//Motion
import { motion } from "framer-motion";

//Variant
import { fadeIn } from '../variants'


export function FeaturesSection2() {
    return (
        <section className='py-[1.87rem] lg:py-[7.5rem]'>
            <div className="container mx-auto">
                <div className='flex flex-col justify-end items-center lg:flex-row'>
                    {/* Img */}
                    <motion.div
                        variants={fadeIn('right', 0.4)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }} className='flex-1 lg:absolute lg:left-0 order-2 lg:order-1'>
                        <img src={Img2} alt="" />
                    </motion.div>
                    {/* Text */}
                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='flex-1 max-w-[28.5rem]'>
                        <h3 className='h3 mb-6'>
                            Detalhes
                        </h3>
                        <p className='text-gray mb-8 '>Visualize todas as informações relacionadas à mineração em tempo real</p>
                    </motion.div>
                    <button className='btn px-8 mb-6 lg:mb-0'>Leia Mais</button>
                </div>
            </div>

        </section>
    )
}