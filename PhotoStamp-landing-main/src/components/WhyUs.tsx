import Image from 'next/image'
import React from 'react'

export default function WhyUs() {
  return (
    <section id="us" className="min-w-screen min-h-screen bg-white flex items-center justify-center py-5">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="mt-4 md:mt-0">
          <Image className="w-full lg:hidden md:hidden sm:visible" width={200} height={200} src="/us.svg" alt="app" />
          <p className="font-medium text-indigo-500">Acerca de nosotros</p>
          <h1 className="text-2xl font-semibold text-gray-800 md:text-3xl">Quiénes somos y por qué elegirnos?</h1>
          <p className="mb-5 mt-3 text-gray-500">Años de experiencia en Fotografías de Recuerdo Escolar nos llevan a entender el concepto y crear un producto innovador de diseño atractivo,
            que mantiene la esencia de conservar recuerdos de nuestra infancia por largo tiempo.</p>
          <p className="mb-5 mt-3 text-gray-500">
            Incluimos herramientas que simplifican la experiencia de realizar un pedido tanto para los padres como para la institución.
          </p>
          <p className="mb-5 mt-3 text-gray-500">
            Esperamos que estén satisfechos con los resultados al recibir nuestros productos.</p>
        </div>
        <Image className="w-full hidden sm:block" width={200} height={200} src="/us.svg" alt="app" />
      </div>
    </section>
  )
}
