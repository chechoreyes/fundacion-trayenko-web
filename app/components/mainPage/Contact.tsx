import Image from 'next/image';
import React from 'react';

export const Contact = () => {
    return (
        <div className='h-[100vh] flex flex-row'>
            <div className='w-1/2 flex items-center justify-center flex-col gap-4 bg-neutral-300 px-6 py-6'>
                <h1 className='text-neutral-1000 font-bold text-4xl'>
                    Como ayudar
                </h1>
                <div className='text-neutral-1000 text-xl font-normal text-justify flex flex-row gap-4 justify-center items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        width='24'
                        height='24'
                        strokeWidth='2'
                    >
                        <path d='M3 21l18 0'></path>{' '}
                        <path d='M3 10l18 0'></path>{' '}
                        <path d='M5 6l7 -3l7 3'></path>{' '}
                        <path d='M4 10l0 11'></path>{' '}
                        <path d='M20 10l0 11'></path>{' '}
                        <path d='M8 14l0 3'></path> <path d='M12 14l0 3'></path>{' '}
                        <path d='M16 14l0 3'></path>{' '}
                    </svg>
                    <p>
                        Cuenta Vista <strong>Banco Estado N°62670121726</strong>
                    </p>
                </div>
                <div className='text-neutral-1000 text-xl font-normal text-justify flex flex-row gap-4 justify-center items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        width='24'
                        height='24'
                        strokeWidth='2'
                    >
                        {' '}
                        <path d='M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0'></path>{' '}
                        <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>{' '}
                    </svg>
                    <p>RUT: 65.235.589-7</p>
                </div>
                <div className='text-neutral-1000 text-xl font-normal text-justify flex flex-row gap-4 justify-center items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    >
                        <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
                        <path d='M3 7l9 6l9 -6' />
                    </svg>
                    <p>contacto@fundaciontrayenko.cl</p>
                </div>
                <div className='text-neutral-1000 text-xl font-normal text-justify flex flex-row gap-4 justify-center items-center'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        width='24'
                        height='24'
                        strokeWidth='2'
                    >
                        {' '}
                        <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>{' '}
                    </svg>
                    <p>+56 9 9889 5349</p>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-center flex-col gap-4 bg-white px-6 py-6'>
                <Image
                    src='/logofundacion.png'
                    alt='Logo Fundacion'
                    width={400}
                    height={400}
                />
            </div>
        </div>
    );
};
