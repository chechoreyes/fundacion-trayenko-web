import Image from 'next/image';
import React from 'react';

export const OurProject = () => {
    return (
        <div className='h-[100vh] flex flex-row'>
            <div className='w-1/2 h-full flex flex-row items-center justify-center bg-white'>
                <Image
                    src='/letrina.jpg'
                    alt='Foto de un baño'
                    layout='responsive' // Esto asegura que la imagen mantenga las proporciones correctas
                    width={1000} // El ancho original de la imagen
                    height={750} // La altura proporcional de la imagen
                    objectFit='cover' // Ajusta la imagen para cubrir el área sin deformarse
                />
            </div>
            <div className='w-1/2 flex items-center justify-center flex-col gap-4 bg-neutral-300 px-6 py-6'>
                <h1 className='text-neutral-1000 font-bold text-4xl'>
                    Nuestro proyecto
                </h1>
                <p className='text-neutral-1000 text-xl font-normal text-justify'>
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
