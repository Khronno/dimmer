import Image from 'next/image'
import React from 'react'

export default function Product() {
    return (
        <section id="prod" className="min-w-screen min-h-screen bg-white flex items-center justify-center py-5">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <Image className="w-full lg:hidden md:hidden sm:visible" width={200} height={200} src="/lgallery.svg" alt="app" />
                    <p className="font-medium text-indigo-500">Productos</p>
                    <h1 className="text-2xl font-semibold text-gray-800 md:text-3xl">Productos de calidad</h1>
                    <p className="mb-5 mt-3 text-gray-500">
                        Ofrecemos productos personalizados relizados con materiales de alta calidad.
                    </p>
                    <p className="mb-5 mt-3 text-gray-500">
                        (lista de materiales en tabla).
                    </p>
                    {/* <div className="grid gap-6 mt-8 sm:grid-cols-2">
                        <div className="flex items-center text-gray-800">
                            <AiOutlineCheck className="w-5 h-5 mx-3" />
                            <span className="mx-3">Papel fotográfico de alta calidad 300 grs</span>
                        </div>

                        <div className="flex items-center text-gray-800">
                            <AiOutlineCheck className="w-5 h-5 mx-3" />
                            <span className="mx-3">Laminado brillo en ambas caras.</span>
                        </div>

                        <div className="flex items-center text-gray-800">
                            <AiOutlineCheck className="w-5 h-5 mx-3" />

                            <span className="mx-3">Diseño original</span>
                        </div>

                        <div className="flex items-center text-gray-800">
                            <AiOutlineCheck className="w-5 h-5 mx-3" />
                            <span className="mx-3">Máxima durabilidad y resistencia a manchas</span>
                        </div>

                        <div className="flex items-center text-gray-800">
                            <AiOutlineCheck className="w-5 h-5 mx-3" />
                            <span className="mx-3">Frente con diseño exclusivo de la Institución escolar</span>
                        </div>

                        <div className="flex items-center text-gray-800">
                            <AiOutlineCheck className="w-5 h-5 mx-3" />
                            <span className="mx-3">Adicional incluído: Foto del alumno con frente laminado brillo y dorso cubierto con imán</span>
                        </div>
                    </div> */}
                </div>
                <Image className="w-full hidden sm:block" width={200} height={200} src="/lgallery.svg" alt="app" />
            </div>
        </section>)
}
