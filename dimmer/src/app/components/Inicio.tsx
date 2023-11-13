"use client"
import { motion} from "framer-motion";
export default function Inicio() {
    return (
        <>

            <div className="grid place-items-center h-screen w-[90%]">
                <motion.h1
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.3 },
                    }}
                    className="text-center text-6xl sm:text-8xl md:text-10xl lg:text-12xl text-gray-600 font-[650] font-sans mb-[10rem]"
                >
                    Dimmer
                    <p className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 font-[650] font-mono mt-2">
                        Ilumina a tu medida.
                    </p>
                </motion.h1>
                <motion.p initial={{opacity:0.5}} whileHover={{opacity:1}}
                className="text-left text-base sm:text-sm md:text-md lg:text-lg text-gray-400 font-[650] font-mono mt-2">
                            - Silvestrin Ramiro <br />
                            - Mauricio Matías <br />
                            - Santino Baro <br />
                            - Joaquin Fernández
                </motion.p>
            </div>
        </>
    );
}