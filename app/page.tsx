import {
    Contact,
    MainPageMainContent,
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
            <OurProject />
            <OurTeam />
            <Contact />
        </main>
    );
}
