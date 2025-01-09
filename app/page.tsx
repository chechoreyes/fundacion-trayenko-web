import {
    Contact,
    MainPageMainContent,
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
            <WhatWeDo />
            <OurFundation />
            <OurProject />
            <OurTeam />
            <Contact />
        </main>
    );
}
