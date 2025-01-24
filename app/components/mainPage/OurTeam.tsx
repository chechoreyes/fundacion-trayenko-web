import React from 'react';
import { SingleTeamComp } from '../SingleTeamComp';

export const OurTeam = () => {
    return (
        <div id='equipo' className='bg-white px-16 py-10'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                    Nuestro equipo
                </h2>
                <p className='font-light text-gray-500 lg:mb-8 sm:text-xl dark:text-gray-400'>
                    El equipo de la Fundación está compuesto por profesionales
                    voluntarios provenientes de diversas áreas del conocimiento.
                    Al tener una vasta experiencia en sus rubros, se vuelven
                    técnicamente apropiados para complementarse en este
                    proyecto.
                </p>
                <p className='font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400'>
                    Conoce a cada una de las personas que trabajan para
                    Fundación Trayenko:
                </p>
            </div>

            <div className='grid gap-8 mb-6 lg:mb-16 md:grid-cols-2'>
                <SingleTeamComp
                    name='Gabriel Rivera Véliz'
                    description='Constructor Civil Universidad Católica de Chile, 33 años de experiencia en el área de la construcción habitacional'
                    image='gabriel-rivera-veliz.jpg'
                />
                <SingleTeamComp
                    name='Aníbal Rivera Véliz'
                    description='Contador Auditor Universidad de Santiago de Chile, 40 años de experiencia.'
                    image='anibal-rivera-veliz.jpg'
                />
                <SingleTeamComp
                    name='Luis I. Rivera Véliz'
                    description='Profesor Educación Básica Universidad Católica de Curicó y con 40 años de experiencia en administración de empresa agrícola frutícola.'
                    image='luis-rivera-veliz.jpg'
                />
                <SingleTeamComp
                    name='Mario Diaz Escobar'
                    description='Empresario hotelero, Estación Benedicto, Curacautín'
                    image='mario-diaz-escobar.jpg'
                />
                <SingleTeamComp
                    name='Patricio Véliz Véliz'
                    description='Arquitecto Universidad Andrés Bello con más de 30 años de experiencia en diseño y construcción de viviendas sociales y viviendas unifamiliares.'
                    image='patricio-veliz-veliz.jpg'
                />
                <SingleTeamComp
                    name='Viviana Quintanilla Castañeda'
                    description='Asistente Social Universidad Católica de Chile, con más de 30 años de experiencia de los cuales 22 años se desempeñó en Fundación de Prevención de Violencia Infantil (Previf)'
                    image='vivina-quintanilla-castaneda.jpg'
                />
                <SingleTeamComp
                    name='Daniela Rivera Jiménez'
                    description='Licenciatura en Lengua y Literatura Inglesas, Universidad de Chile. Periodismo Pontificia Universidad Católica de Chile y diplomado en Estrategias para Contenido Digital'
                    image='daniela-rivera-jimenez.jpg'
                />
            </div>
        </div>
    );
};
