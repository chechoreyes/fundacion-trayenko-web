import Image from 'next/image';
import React from 'react';

export const OurProject = () => {
    return (
        <div id='nuestro-proyecto' className='h-screen flex flex-row'>
            {/* Sección de imágenes sin aire */}
            <div className='w-2/5 md:w-1/2 h-full flex flex-col bg-white min-w-0 min-h-0'>
                <div className='relative w-full h-1/2 flex-shrink-0'>
                    <Image
                        src='/SS1.png'
                        alt='Foto de un baño'
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className='relative w-full h-1/2 flex-shrink-0'>
                    <Image
                        src='/SS2.png'
                        alt='Foto de un baño'
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>

            {/* Sección de texto */}
            <div className='w-3/5 md:w-1/2 flex items-center justify-center flex-col gap-4 bg-neutral-300 px-20 py-6'>
                <h1 className='text-neutral-1000 font-bold text-4xl'>
                    Nuestro proyecto
                </h1>
                <p className='text-neutral-1000 text-sm md:text-lg xl:text-xl font-normal'>
                    La solución que propone Fundación Trayenko consta de la
                    construcción in situ de una estructura de madera de 1,20
                    mts. x 2,00 mts., sobre pallet plástico, forrado con
                    planchas de zinc y acondicionado con lavamanos, taza WC y
                    tina/receptáculo conectado a fosa y pozo absorbente. Esta
                    estructura se construye adosada a la vivienda principal.
                </p>
            </div>
        </div>
    );
};
