//Component

import { CalcForm } from "./CalcForm";

//motion
import { motion } from "framer-motion";

//variant
import { fadeIn } from '../variants'


export function Calculate() {
    return (
        <section className="section">
            <div className="container mx-auto">
                {/* Text */}
                <div className="text-center">
                    <motion.h2
                        variants={fadeIn('up', 0.4)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className="section-title">
                        verifique quanto você pode ganhar
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.5 }}
                        className="section-subtitle text-lg mb-16 max-w-[39rem] mx-auto">vamos verificar sua taxa de hash para ver quanto você vai ganhar hoje</motion.p>
                </div>
                <CalcForm />
            </div>
        </section>
    )
}