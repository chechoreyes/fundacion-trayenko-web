import {
    Contact,
    MainPageMainContent,
    MotivationAndVision,
    NewsPageComp,
    OurFundation,
    OurProject,
    OurTeam,
    WhatWeDo,
} from './components/mainPage';
import { HowHelpDiv } from './components/mainPage/HowHelpDiv';

export default function Home() {
    return (
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
    );
}
