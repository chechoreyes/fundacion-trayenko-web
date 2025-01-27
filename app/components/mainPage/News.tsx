import React from 'react';
import { SingleNewsComponent } from '../SingleNewsComponent';

export const NewsPageComp = () => {
    return (
        <div id='notas' className='min-h-[100vh] bg-white px-16 py-10'>
            <div className='flex flex-col justify-center items-center h-full'>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
                    Noticias
                </h2>
                <div className='flex flex-col md:flex-row gap-2'>
                    <SingleNewsComponent
                        title='Dideco Lonquimay'
                        image='mun-lonquimay.JPG'
                        body='El pasado 15 de julio de 2024, en dependencias de la Ilustre Municipalidad de Lonquimay, fuimos recibidos por la directora de Dideco, Srta. Karen Peña Jara, con su equipo de profesionales, señores Patricio Cabrera y Cristian Boccanegra. Amablemente, nos manifestaron su empatía con nuestra iniciativa y nos motivaron a iniciar las operaciones. “Lonquimay, junto con sus alrededores, es una de las comunas más pobres de la región. Hay mucha necesidad de dar soluciones de baños en la zona, por lo que han acertado en la localización del proyecto”, expresaron.'
                    />
                    <SingleNewsComponent
                        title='Convenio de colaboración con Ferretería de Lonquimay'
                        body='Le presentamos nuestro proyecto a José Manosalva Escalona, dueño de la ferretería más importante de Lonquimay y conocedor de la zona. Inmediatamente se mostró gratamente complacido por haber sido contactado y, de manera voluntaria, ofreció su apoyo espacial y logístico para las operaciones que se llevarán en la zona. Agradecemos inmensamente su interés en la colaboración y propuesta de ayudarnos con un espacio físico en donde poder prearmar nuestras soluciones, por lo que mientras vaya avanzando el proyecto buscaremos la forma de hacerla efectiva. La cercanía de la Ferretería de Lonquimay con el lugar de ejecución de las obras, lo transforma en una ayuda  muy significativa que acerca de manera real la solución a los beneficiarios.'
                        image='ferreteria-lonquimay-2.JPG'
                    />
                </div>
            </div>
        </div>
    );
};
