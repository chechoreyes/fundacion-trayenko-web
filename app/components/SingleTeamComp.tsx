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
        <div className='flex flex-col md:flex-row items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[250px] w-full max-w-2xl'>
            {/* Ocultar en pantallas menores a md */}
            <div className='hidden md:block relative w-full md:w-1/2 h-[250px]'>
                <Image
                    src={`/${image}`}
                    alt={name}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='top'
                    className='rounded-l-lg'
                />
            </div>

            <div className='p-5 flex flex-col justify-between gap-4 w-full'>
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
