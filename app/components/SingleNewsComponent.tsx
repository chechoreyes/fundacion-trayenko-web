import Image from 'next/image';
import React from 'react';

export interface ISingleNewsComponent {
    title: string;
    body: string;
    image: string;
}

export const SingleNewsComponent: React.FC<ISingleNewsComponent> = ({
    body,
    title,
    image,
}) => {
    return (
        <div className='mx-auto p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-3/4 w-1/2 flex flex-col gap-3'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {title}
            </h1>
            <p className='mt-3 mb-4 font-light text-md text-neutral-900 dark:text-neutral-900'>
                {body}
            </p>
            <Image
                src={`/${image}`}
                alt={title}
                layout='fill'
                objectFit='cover'
                objectPosition='top'
                className='rounded-l-lg'
            />
        </div>
    );
};
