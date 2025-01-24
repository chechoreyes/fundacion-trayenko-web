import {
    Contact,
    MainPageMainContent,
    MotivationAndVision,
    NewsPageComp,
    OurFundation,
    OurProject,
    OurTeam,
} from './components/mainPage';
import Head from 'next/head';

export default function Home() {
    return (
        <main className=''>
            <Head>
                <title>Fundación Trayenko</title>
            </Head>
            <MainPageMainContent />
            {/* <HowHelpDiv /> */}
            <MotivationAndVision />
            <OurFundation />
            {/* <WhatWeDo /> */}
            <OurProject />
            <NewsPageComp />
            <OurTeam />
            <Contact />
        </main>
    );
}
