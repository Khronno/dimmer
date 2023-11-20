import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
                <Link href="#">
                    <Image width={250} height={200} src="/imagoh2.svg" alt="logo" />
                </Link>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
                    <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-500">
                        Página web
                    </a>

                    <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-indigo-500">
                        Aplicación
                    </a>
                </div>

                <p className="mt-6 text-sm text-gray-500 lg:mt-0">© Copyright 2023 PhotoStamp. </p>
            </div>
        </footer>
    )
}
