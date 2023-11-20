"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import {
    easing,
    fadeInUp,
} from "@/animations/Variants";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Hero() {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    return (
        <section id="#"  ref={ref} className="relative overflow-hidden min-w-screen min-h-screen mt-[3.917rem] z-[-1]">
            <div aria-hidden="true" className="flex absolute -top-96 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-rose-500 to-rose-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
                <div className="bg-gradient-to-tl from-indigo-500 via-neutral-50 to-indigo-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]"></div>
            </div>
            <div className="relative z-10">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: {
                                transition: {
                                    delayChildren: 0.1,
                                    staggerChildren: 0.2,
                                    easing,
                                },
                            },
                        }}
                    >

                        <div className="max-w-2xl text-center mx-auto">
                            <motion.div variants={fadeInUp}>
                                <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-indigo-600 to-indigo-500 text-transparent">
                                    Carpetas de recuerdos
                                </p>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                animate={controls}
                                variants={{
                                    visible: {
                                        transition: {
                                            delayChildren: 0.3,
                                            staggerChildren: 0.4,
                                            easing,
                                        },
                                    },
                                }}
                            >
                                <div className="mt-5 flex align-center justify-center">
                                    <motion.div variants={fadeInUp}>
                                        <Image width={150} height={150} src="/photo2.svg" alt="photo" />
                                    </motion.div>

                                    <motion.div variants={fadeInUp}>
                                        <Image className="mt-2" width={150} height={200} src="/stamp2.svg" alt="stamp" />
                                    </motion.div>
                                </div>
                            </motion.div>

                            <div className="mt-5 max-w-3xl">
                                <motion.div variants={fadeInUp}>
                                    <p className="text-lg text-gray-800">slogan.</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    )
}
