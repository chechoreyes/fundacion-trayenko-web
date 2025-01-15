import Image from 'next/image';
import React from 'react';

export const MainPageMainContent = () => {
    return (
        <div className="w-screen h-[75vh] bg-center bg-cover bg-no-repeat bg-[url('/principal-background.jpg')] flex flex-col items-start px-8 py-8 mx-auto max-w-full text-left">
            {/* Contenedor flexible con layout responsive */}
            <div className='flex flex-col md:flex-row items-start w-full max-w-5xl space-y-6 md:space-y-0 md:space-x-6'>
                {/* Logo y texto alineados a la izquierda */}
                <Image
                    src='/logocolor.png'
                    alt='Logo Fundación'
                    width={160}
                    height={160}
                />

                {/* Texto alineado a la izquierda */}
                <div className='flex-1 space-y-2     text-left'>
                    <h1 className='text-5xl font-extrabold tracking-tight leading-tight text-neutral-900 md:text-6xl lg:text-7xl'>
                        Fundación Trayenko
                    </h1>
                    <h2 className='text-xl font-bold tracking-tight leading-tight text-neutral-900 md:text-xl lg:text-xl'>
                        Ecosaneamento y habitabilidad    rural
                    </h2>
                    {/* <p className='text-lg font-normal text-neutral-800 lg:text-xl'>
                        Buscamos eliminar los pozos negros y entregar un baño
                        con sistema de alcantarillado básico y eficiente, que
                        mejore la calidad de vida de familias de zonas rurales
                        de la Región de la Araucanía.
                    </p> */}
                </div>
            </div>
        </div>
    );
};
