import Image from 'next/image';
import React from 'react';

export const OurProject = () => {
    return (
        <div
            id='nuestro-proyecto'
            className='md:h-screen h-[200vh] flex flex-col md:flex-row'
        >
            {/* Sección de imágenes */}
            <div className='w-full md:w-1/2 h-[100vh] md:h-full flex flex-col bg-white'>
                <div className='relative w-full h-[50vh] md:h-1/2'>
                    <Image
                        src='/SS1.png'
                        alt='Foto de un baño'
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <div className='relative w-full h-[50vh] md:h-1/2'>
                    <Image
                        src='/SS2.png'
                        alt='Foto de un baño'
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>

            {/* Sección de texto */}
            <div className='h-[100vh] md:w-1/2 md:h-full flex items-center justify-center flex-col gap-32 bg-neutral-300 px-6 md:px-20 py-6'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-neutral-1000 font-bold text-4xl'>
                        Nuestro proyecto
                    </h1>
                    <p className='text-neutral-1000 text-sm md:text-lg xl:text-xl font-normal'>
                        La solución que propone Fundación Trayenko consta de la
                        construcción in situ de una estructura de madera de 1,20
                        mts. x 2,00 mts., sobre pallet plástico, forrado con
                        planchas de zinc y acondicionado con lavamanos, taza WC
                        y tina/receptáculo conectado a fosa y pozo absorbente.
                        Esta estructura se construye adosada a la vivienda
                        principal.
                    </p>
                </div>
                <div className='w-full'>
                    <iframe
                        className='w-full aspect-video'
                        src='https://www.youtube.com/embed/VxMVj7NgTPw?si=eHhtlZrd-_jByKZg'
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowFullScreen
                        referrerPolicy='strict-origin-when-cross-origin'
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
