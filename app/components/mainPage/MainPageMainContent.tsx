import Image from 'next/image';
import React from 'react';

export const MainPageMainContent = () => {
    return (
        <div className="w-screen h-full md:h-[75vh] bg-center bg-cover bg-no-repeat bg-[url('/principal-background.jpg')] flex flex-col items-start px-8 py-8 mx-auto max-w-full text-left">
            {/* Contenedor flexible con layout responsive */}
            <div className='h-2/4 flex flex-col md:flex-row-reverse md:items-normal md:justify-between w-full space-y-6 md:space-y-0 md:space-x-6'>
                {/* Logo y texto alineados a la izquierda */}
                <div className='relative w-40 h-40'>
                    <Image
                        src='/logocolor.png'
                        alt='Logo Fundación'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                {/* Texto alineado a la izquierda */}
                <div className='flex flex-col justify-end md:justify-normal flex-1 space-y-2 text-left'>
                    <h1 className='text-5xl font-extrabold tracking-tight leading-tight text-neutral-50 lg:text-neutral-900 md:text-6xl lg:text-7xl'>
                        Fundación Trayenko
                    </h1>
                    <h2 className='text-xl font-bold tracking-tight leading-tight sm:text-neutral-100 text-neutral-800 lg:text-neutral-900 md:text-xl lg:text-xl bg-neutral-100 px-2 py-2 rounded-lg shadow-lg sm:bg-transparent sm:px-0 sm:py-0 sm:rounded-none sm:shadow-none'>
                        Ecosaneamiento y habitabilidad rural
                    </h2>

                    <div className='flex flex-col gap-4 w-full'>
                        {/* <div className='w-5/6 md:w-4/5 xl:w-5/6 flex flex-col gap-4 bg-neutral-100 px-2 py-2 rounded-lg shadow-lg'> */}
                        <div className='w-5/6 md:w-4/5 xl:w-5/6 flex flex-col gap-4 bg-neutral-100 px-2 py-2 rounded-lg shadow-lg lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none'>
                            <h1 className='text-neutral-1000 font-bold text-2xl'>
                                ¡Sabías que en Chile, hoy día, cerca de 1 millón
                                de personas aún defecan en Letrinas o al aire
                                libre!
                            </h1>
                        </div>
                        <div className='w-5/6 md:w-4/5 xl:w-5/6 flex flex-col gap-4 bg-neutral-100 px-2 py-2 rounded-lg shadow-lg'>
                            <h1 className='text-trayenko-blue font-bold text-xl'>
                                Construimos el cambio de Letrinas (pozos negros) por
                                baños dignos en viviendas rurales de la
                                Araucanía
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
