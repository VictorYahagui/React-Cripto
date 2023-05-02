
//motion
import { motion } from "framer-motion";

//variant
import { fadeIn } from '../variants'

export function CalcForm() {
    return (
        <motion.div
            variants={fadeIn('up', 0.3)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.5 }}
            className="w-full bg-white max-w-[58rem] mx-auto rounded-2xl text-darkblue p-12 shadow-primary  z-10">
            {/* Form */}
            <form action="" className="flex  flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0">
                <input type="text"
                    className="input placeholder:text-darkblue"
                    placeholder="Entre com seu Hash rate" />
                <select className="select rounded hover:bg-white">
                    <option value="">TH/s</option>
                    <option value="">H/s</option>
                    <option value="">KH/s</option>
                    <option value="">MH/s</option>
                    <option value="">GH/s</option>
                </select>
                <button className="btn text-white px-8 flex self-start">Calculo</button>
            </form>
            {/* Text */}
            <div className="mt-24">
                <div className="text-blue font-medium mb-4">
                    ESTIMADO 24H RECEITA
                </div>
                <div className="text-[2rem] font-bold mb-3">
                    0,055 1230 59 ETH <span className="text-blue">(%1275)</span>
                </div>
                <div className="text-gray-500 tracking-[1%]">
                    a receita mudará com base na dificuldade de mineração e no preço do ethereum
                </div>
            </div>
        </motion.div>
    )
}