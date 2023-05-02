//Motion
import { motion } from "framer-motion";

//Variant
import { fadeIn } from '../variants'

//Componentes
import { NewsletterForm } from "./NewsletterForm";

export function Newsletter() {
    return (
        <section className="py-[2.5rem] lg:py-[5.5rem] bg-newsletter bg-cover">
            <div className="container mx-auto">
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className="flex flex-col lg:flex-row items-center justify-between bg-blue p-12 rounded-2xl lg:bg-newsletterBox lg:bg-no-repeat lg:h-[13.5rem]">
                    {/* Text */}
                    <div className="flex-1 w-full">
                        <h3 className="h3 mb-4"> Começe agora</h3>
                        <p className="max-w-[22rem] mb-8">Junte-se ao CRAPPO</p>
                    </div>
                    <NewsletterForm />
                </motion.div>
            </div>
        </section>
    )
}