import React from 'react';
import { NavbarLinkComp } from './NavbarLink';
import Link from 'next/link';
import { HowHelpButton } from './HowHelpButton';
import Image from 'next/image';

export const MainNavbar = () => {
    return (
        <nav className='bg-trayenko-blue border-gray-200 dark:bg-trayenko-blue'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link
                    href='/'
                    className='flex items-center space-x-3 rtl:space-x-reverse'
                >
                    <Image
                        src='/fundaciontrayenkotext.png'
                        alt='Logo Fundación'
                        width={160}
                        height={160}
                    />
                </Link>
                <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
                    <HowHelpButton />
                    <button
                        data-collapse-toggle='navbar-cta'
                        type='button'
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        aria-controls='navbar-cta'
                        aria-expanded='false'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='w-5 h-5'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 17 14'
                        >
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M1 1h15M1 7h15M1 13h15'
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
                    id='navbar-cta'
                >
                    <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                        <NavbarLinkComp
                            title='Qué hacemos'
                            page='que-hacemos'
                        />
                        <NavbarLinkComp
                            title='Nuestro proyecto'
                            page='nuestro-proyecto'
                        />
                        <NavbarLinkComp title='Notas de interés' page='notas' />
                        <NavbarLinkComp title='Contacto' page='contacto' />
                        <NavbarLinkComp
                            title='Transparencia'
                            page='transparencia'
                        />
                    </ul>
                </div>
            </div>
        </nav>
    );
};
