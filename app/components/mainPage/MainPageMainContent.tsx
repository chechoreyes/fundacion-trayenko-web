import Image from 'next/image';
import React from 'react';

export const MainPageMainContent = () => {
    return (
        <div className="w-screen h-[75vh] bg-center bg-cover bg-no-repeat bg-[url('/DSC_1015.JPG')] bg-trayenko-blue bg-blend-multiply flex flex-col items-center justify-center px-4 mx-auto max-w-full text-center py-16 lg:py-24">
            <div className='flex flex-row w-full justify-between px-24 items-center'>
                <div>
                    <h1 className='mb-4 mt-4 text-7xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl'>
                        Fundación Trayenko
                    </h1>
                    <p className='mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
                        Buscamos eliminar los pozos negros y entregar un baño con
                        sistema de alcantarillado básico y eficiente, que mejore
                        la calidad de vida de familias de zonas rurales de la
                        Región de la Araucanía
                    </p>
                </div>

                <Image
                    src='/logofundacion.png'
                    alt='Logo Fundacion'
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
};
