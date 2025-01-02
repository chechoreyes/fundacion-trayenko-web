import React from 'react';

export const HowHelpButton = () => {
    return (
        <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSeS1LEzWqa6GqolcoWnoY3-s1LsVluL0R2z9MY7R47EEMHfgw/viewform?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
        >
            <button
                type='button'
                className='text-white bg-[#023047] hover:bg-[#219ebc] hover:text-neutral-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
                Cómo ayudar
            </button>
        </a>
    );
};
