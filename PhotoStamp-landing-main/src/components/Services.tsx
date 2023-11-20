import { Button } from "@chakra-ui/react";
import Image from "next/image";

export default function Services() {
    return (
        <section id="servs" className="min-w-screen min-h-screen bg-white flex items-center justify-center py-5">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <Image className="w-full" width={200} height={200} src="/app.svg" alt="app" />
                <div className="mt-4 md:mt-0">
                    <p className="font-medium text-indigo-500">Servicios</p>
                    <h1 className="text-2xl font-semibold text-gray-800 md:text-3xl">Simple y práctico</h1>
                    <p className="mt-4 text-gray-500">No solo nos encargamos de entregarle un producto digno de plasmar sus recuerdos, también tenemos en cuenta la experiencia y comodidad al relizar su pedido. Es por eso que brindamos una aplicación que facilitara su pedido.</p>
                    <Button className="text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg mt-3 shadow p-2">
                        App
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Button>
                </div>
            </div>
        </section>
    )
}
