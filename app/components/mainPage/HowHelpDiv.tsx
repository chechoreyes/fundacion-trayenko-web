import React from 'react';

export const HowHelpDiv = () => {
    return (
        <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSeS1LEzWqa6GqolcoWnoY3-s1LsVluL0R2z9MY7R47EEMHfgw/viewform?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
        >
            <div className='h-[15vh] bg-trayenko-green text-4xl text-neutral-950 py-8 flex items-center justify-center cursor-pointer font-bold hover:text-neutral-800'>
                Si deseas ayudar, contacta con nosotros aquí
            </div>
        </a>
    );
};
