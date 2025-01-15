import React from 'react';

export const MotivationAndVision = () => {
    return (
        <div className='bg-trayenko-blue flex flex-col md:flex-row gap-4 p-4'>
            <div className='md:w-1/2 p-4 flex flex-col gap-4'>
                <h1 className='text-neutral-1000 font-bold text-4xl'>
                    Motivación
                </h1>
                <p className='text-neutral-900 text-xl font-normal'>
                    Fundación Trayenko, establecida en 2024 como una entidad de
                    derecho privado sin fines de lucro, emerge de la inquietud y
                    visión innovadora de su fundador, quien posee un profundo
                    conocimiento de los desafíos rurales vinculados al uso de
                    letrinas o pozos negros, los que impactan la dignidad
                    humana, la salud de las personas y la conservación del medio
                    ambiente. A su vez, enfrentan la falta de cobertura de los
                    programas gubernamentales. Por estos motivos, decide aunar
                    esfuerzos con otros profesionales para poder implementar
                    soluciones a los problemas de saneamiento y habitabilidad
                    presentes en la zona precordillerana de la Región de la
                    Araucanía, donde se encuentra la menor cobertura de
                    servicios sanitarios en el área rural.
                </p>
            </div>
            <div className='md:w-1/2 p-4 flex flex-col gap-2'>
                <h1 className='text-neutral-1000 font-bold text-4xl'>Misión</h1>
                <p className='text-neutral-900 text-xl font-normal'>
                    Nuestra principal tarea es mejorar las condiciones
                    sanitarias de hogares rurales transformando letrinas o pozos
                    negros en baños conectados a fosas sépticas con un
                    tratamiento básico de aguas residuales. Buscamos dar
                    comodidad, dignificar la higiene del hogar y reducir la
                    contaminación ambiental al infiltrar de manera efectiva los
                    residuos tratados en la naturaleza, asegurando un impacto
                    positivo y duradero en la vida de cada persona y en la
                    mejora general de las condiciones de vida en estas
                    comunidades.
                </p>
            </div>
        </div>
    );
};
