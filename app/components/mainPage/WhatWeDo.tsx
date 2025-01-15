import React from 'react';

export const WhatWeDo = () => {
    return (
        <div className="h-[100vh] bg-center bg-cover bg-no-repeat bg-[url('/DSC_1015.JPG')] bg-neutral-500 bg-blend-multiply pt-[18%] px-4">
            <div className='w-5/6 md:w-4/5 xl:w-2/5 flex flex-col gap-4 bg-neutral-300 px-6 py-6 rounded-lg shadow-lg'>
                <h1 className='text-neutral-1000 font-bold text-4xl'>
                    Qué hacemos
                </h1>
                <p className='text-neutral-1000 text-xl font-normal'>
                    Fundación Trayenko tiene como propósito principal dar
                    solución a problemas de habitabilidad, alcantarillado,
                    saneamiento rural y otros aspectos constructivos de las
                    viviendas, a través de la construcción de un baño básico con
                    alcantarillado. A si mismo, buscamos entregar a las familias
                    capacitación y conocimientos respecto al daño ecológico del
                    uso de pozos negros y los beneficios de tener un baño
                    accesible desde el interior la vivienda.
                </p>
            </div>
        </div>
    );
};
