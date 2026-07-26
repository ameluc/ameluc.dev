/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file adapter.tsx
 * @version 0.3.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
*/

"use client"

import type { ReactElement } from "react";
import type { CardData, ContentLocalised, Device } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useState } from "react";
import { CardViewer } from "@/lib/ui/containers/cardviewer";
import { SectionContact } from "@/lib/ui/sections/sec_contact";
import { SectionAnalyst } from "@/lib/ui/sections/sec_data";
import { SectionInfo } from "@/lib/ui/sections/sec_info";
import { SectionDev } from "@/lib/ui/sections/sec_software";
import { StickyFooter } from "@/lib/ui/sections/sticky_footer";
import { bgColors } from "@/lib/ui/styles";
import gsap from "@/lib/animation";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function DesktopAdapter(props: { "content": ContentLocalised, "device": Device }): ReactElement {
    const [ cardData, setCardData ] = useState<null | CardData>(null);
    const [ activeCard, setActiveCard ] = useState<null | string>(null);
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(cardData ? true : false);
    const { sectionAbout, sectionAnalyst, sectionDeveloper, sectionContact } = props.content.main;

    useGSAP(() => {
        ScrollSmoother.create({ "smooth": 2, "effects": true });
        gsap.timeline().from("#moving-container", {
            "duration": 1.0,
            "opacity": 0.0,
            "y": 100
        }, "+=1.5");
    }, { "dependencies": [] });
    useEffect(() => {
        if ("scrollRestoration" in history) history.scrollRestoration = "manual";

        const smoother: undefined | globalThis.ScrollSmoother = ScrollSmoother.get();

        if (smoother) smoother.scrollTo(0, false);
        else window.scrollTo(0, 0);
    }, []);

    return (<div id={`smooth-wrapper`}>
        <div id={`smooth-content`}>
            <div className={`w-screen ${bgColors}`}>
                <div id={`moving-container`}>
                    <SectionInfo
                        content={sectionAbout}
                        device={props.device}
                    />
                    <SectionAnalyst
                        content={sectionAnalyst}
                        device={props.device}
                        onCardSelect={setCardData}
                        setCardActive={setActiveCard}
                        openViewer={setIsModalOpen}
                    />
                    <SectionDev
                        content={sectionDeveloper}
                        device={props.device}
                        onCardSelect={setCardData}
                        setCardActive={setActiveCard}
                        openViewer={setIsModalOpen}
                    />
                    <SectionContact
                        content={sectionContact}
                        device={props.device}
                    />
                    <StickyFooter
                        content={props.content}
                        device={props.device}
                    />
                </div>
            </div>

            {isModalOpen && <CardViewer
                card={cardData}
                activeCard={activeCard}
                device={props.device}
                closeText={props.content.utility.close}
                onClose={() => {
                    setCardData(null);
                    setIsModalOpen(false);
                }}
            />}
        </div>
    </div>);
}
