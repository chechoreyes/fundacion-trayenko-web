import React from 'react';

export const WhatWeDo = () => {
    return (
        <div className="h-[100vh] bg-center bg-cover bg-no-repeat bg-[url('/DSC_1015.JPG')] bg-neutral-500 bg-blend-multiply pt-[18%] px-4">
            <div className='w-3/5 flex flex-col gap-4 bg-neutral-300 px-6 py-6 rounded-lg shadow-lg'>
                <h1 className='text-neutral-1000 font-bold text-4xl'>
                    Qué hacemos
                </h1>
                <p className='text-neutral-1000 text-xl font-normal'>
                    Fundación Trayenko propone cambiar los sistemas rústicos de
                    pozos negros o letrinas, a través de un baño con sistema de
                    alcantarillado básico y eficiente, construyendo una
                    estructura adosada a la vivienda con acceso directo desde el
                    interior; desaguando a una fosa e infiltrando en un pozo
                    absorbente
                </p>
            </div>
        </div>
    );
};
