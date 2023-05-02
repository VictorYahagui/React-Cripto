//Motion
import { motion } from "framer-motion";

//Variant
import { fadeIn } from '../variants'

//Components
import { FeaturesSection1 } from "./FeaturesSection1";
import { FeaturesSection2 } from "./FeaturesSection2";
import { FeaturesSection3 } from "./FeaturesSection3";


export function Features() {
    return (
        <section className="pt-12 lg:pt-24 bg-violet">
            <div className="container mx-auto">
                <div className="text-center max-w-[47rem] mx-auto mb-24">
                    <motion.h2
                        variants={fadeIn('up', 0.4)}
                        initial={'hidden'}
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className="section-title">
                        Portfólio de mercado de sua escolha
                    </motion.h2>
                </div>
                <FeaturesSection1 />
                <FeaturesSection2 />
                <FeaturesSection3 />
            </div>
        </section>
    )
}