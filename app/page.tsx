import Image from 'next/image';

export default function Home() {
    return (
        <section className="w-screen h-screen bg-center bg-cover bg-no-repeat bg-[url('/DSC_1015.JPG')] bg-gray-700 bg-blend-multiply">
            <nav className='bg-transparent border-gray-200 dark:bg-gray-900'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <a
                        href='https://flowbite.com/'
                        className='flex items-center space-x-3 rtl:space-x-reverse'
                    >
                        <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                            Trayenko
                        </span>
                    </a>
                    <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
                        <button
                            type='button'
                            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                            Cómo ayudar
                        </button>
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
                        <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500'
                                    aria-current='page'
                                >
                                    Qué hacemos
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500'
                                    aria-current='page'
                                >
                                    Nuestro proyecto
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500'
                                    aria-current='page'
                                >
                                    Notas de interés
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500'
                                    aria-current='page'
                                >
                                    Contacto
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500'
                                    aria-current='page'                                >
                                    Transparencia
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='flex flex-col items-center justify-center px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
                <Image
                    src='/logofundacion.png'
                    alt='Logo Fundacion'
                    width={200}
                    height={200}
                />
                <h1 className='mb-4 mt-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
                    Fundación Trayenko
                </h1>
                <p className='mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
                    Ecosaneamento y Habilitabilidad Rural
                </p>
                <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0'>
                    <a
                        href='#'
                        className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'
                    >
                        Cómo ayudar
                        <svg
                            className='w-3.5 h-3.5 ms-2 rtl:rotate-180'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 14 10'
                        >
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M1 5h12m0 0L9 1m4 4L9 9'
                            />
                        </svg>
                    </a>
                    <a
                        href='#'
                        className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400'
                    >
                        Nuestro proyecto
                    </a>
                </div>
            </div>
        </section>
    );
}
