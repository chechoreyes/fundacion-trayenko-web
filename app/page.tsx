import {
    Contact,
    MainPageMainContent,
    MotivationAndVision,
    NewsPageComp,
    OurFundation,
    OurProject,
    OurTeam,
} from './components/mainPage';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Fundación Traykenko',
};

export default function Home() {
    return (
        <>
            <main className=''>
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
        </>
    );
}
