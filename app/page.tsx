import {
    Contact,
    MainPageMainContent,
    MotivationAndVision,
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
            <HowHelpDiv />
            <MotivationAndVision />
            <OurFundation />
            <WhatWeDo />
            <OurProject />
            <OurTeam />
            <Contact />
        </main>
    );
}
