import Image from 'next/image';
import React from 'react';

interface SingleTeamCompProps {
    name: string;
    description: string;
    image: string;
}

export const SingleTeamComp: React.FC<SingleTeamCompProps> = ({
    description,
    name,
    image,
}) => {
    return (
        <div className='items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700'>
            <Image
                className='w-full rounded-lg sm:rounded-none sm:rounded-l-lg h-40'
                src={`/${image}`}
                alt={name}
                width={128} // Establece el ancho fijo
                height={60} // Establece la altura fija
                objectFit='cover' // Asegura que la imagen se ajuste al contenedor
            />

            <div className='p-5 flex flex-col justify-between gap-4'>
                <h3 className='text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {name}
                </h3>
                <p className='mt-3 mb-4 font-light text-gray-500 dark:text-gray-400'>
                    {description}
                </p>
            </div>
        </div>
    );
};
