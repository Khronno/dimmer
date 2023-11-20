import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineMenu } from 'react-icons/hi';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

interface NavItem {
    label: string;
    route: string;
}

interface NavBarProps {
    navItems: NavItem[];
}

const NavBar: React.FC<NavBarProps> = ({ navItems }) => {
    return (
        <div className="flex items-center justify-between mx-auto bg-white p-2 mb-5 w-full top-0 text-center shadow fixed z-20">
            <Link href="#" className="flex items-center">
                <div className='h-12 w-14'>
                    <Image className="w-full" width={200} height={200} src="/Isologov2.svg" alt="isologo" />
                </div>
            </Link>
            <div className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <Menu isLazy>
                    <MenuButton color={"gray-800"} bg={"none"} boxShadow={"none"} _selected={{ bg: "none", }}>
                        <HiOutlineMenu />
                    </MenuButton>
                    <MenuList className='bg-white/90 backdrop-blur-sm'>
                        {navItems.map(({ label, route }) => (
                            <MenuItem key={route} className="m-1 ">
                                <Link href={route} className="inline-block px-3 py-1 rounded relative overflow-hidden group">
                                    {label}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500 transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                                </Link>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </div>

            <div className="hidden w-full md:block md:w-auto">
                <ul className="no-underline flex justify-center">
                    {navItems.map(({ label, route }) => (
                        <li key={route} className="m-1">
                            <a href={route} className="inline-block px-3 py-1 rounded relative overflow-hidden group backdrop-filter backdrop-blur-sm">
                                {label}
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500 transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
