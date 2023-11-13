"use client"
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { HiOutlineMenu } from "react-icons/hi"

export default function NavBar() {
    const links = [
        { label: "Inicio", route: "#" },
        { label: "Qué es?", route: "#que-es" },
        { label: "Historia", route: "#historia" },
        { label: "Objetivo", route: "#objetivo" },
        { label: "Creación", route: "#creacion" },
        { label: "Procedimiento", route: "#procedimiento" },
        { label: "Seguridad", route: "#consideraciones-seguridad" }

    ];

    return (
        <div className="flex items-center justify-between mx-auto bg-white p-2 mb-5 w-full top-0 text-center shadow fixed z-20">
            <div className='h-12 w-14'>
                <Image className="w-[80%]" width={50} height={50} src="/favicon.ico" alt="Dimmer"/>
            </div>
            <div className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer" >
                <Menu isLazy>
                    <MenuButton color={"gray-800"} bg={"none"} boxShadow={"none"} _selected={{ bg: "none", }}>
                        <HiOutlineMenu />
                    </MenuButton>
                    <MenuList className='bg-white/90 backdrop-blur-sm'>
                        {links.map(({ label, route }) => (
                            <MenuItem key={route} className="m-1 ">
                                <Link href={route} className="inline-block px-3 py-1 rounded relative overflow-hidden group">
                                    {label}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-600 transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                                </Link>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </div>
            

            <div className="hidden w-full md:block md:w-auto">
                <ul className="no-underline flex justify-center">
                    {links.map(({ label, route }) => (
                        <li key={route} className="m-1">
                            <a href={route} className="inline-block px-3 py-1 rounded relative overflow-hidden group backdrop-filter backdrop-blur-sm">
                                {label}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-600 transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}