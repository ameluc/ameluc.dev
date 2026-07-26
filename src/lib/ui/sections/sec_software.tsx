/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file sec_software.tsx
 * @version 0.9.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the section component.
*/

"use client"

import type { ReactElement } from "react";
import type { SecDev } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { Paragrapher } from "@/lib/ui/bases/paragrapher";
import { CardSkewer } from "@/lib/ui/containers/cardskewer";
import { playwrite } from "@/lib/ui/fonts";
import { sectionAspect } from "@/lib/ui/styles";
import gsap from "@/lib/animation";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function SectionDev(props: SecDev): ReactElement {
    useGSAP(() => {
        gsap.from("#web-apps-diapo", {
            "display": "none",
            "opacity": 0.00,
            "y": -100,
            "scrollTrigger": {
                "trigger": "#web-apps-diapo",
                "scrub": 1.00,
                "start": "top 85%",
                "end": "20% 80%"
            }
        });
    }, { "dependencies": [] });

    return (<section
        id={`web-apps-diapo`}
        className={`${sectionAspect} gap-15 py-25 border-t border-slate-200 dark:border-slate-800`}>
        <h2 className={`${playwrite.className} text-2xl`}>
            {props.content.title}
        </h2>
        <div className={`w-full md:w-[80%] h-auto flex flex-col items-center justify-center gap-16`}>
            <Paragrapher
                id={`software-p`}
                className={`w-full flex flex-col items-center justify-center`}
                content={props.content.text}
                alignment={`text-center`}
                size={`text-lg`}
                device={props.device}
            />
            <div className={`w-full my-40 flex items-center justify-center md:gap-6`}>
                <CardSkewer
                    className={`w-full flex flex-col lg:flex-row items-center justify-center gap-54 lg:gap-6`}
                    content={props.content.worksDetails1}
                    device={props.device}
                    onCardClick={props.onCardSelect}
                    setCardActive={props.setCardActive}
                    openViewer={props.openViewer}
                    dSpeedEnd={1.40}
                    dSpeedGap={0.30}
                />
                <CardSkewer
                    className={`w-full flex flex-col lg:flex-row items-center justify-center gap-36 lg:gap-6`}
                    content={props.content.worksDetails2}
                    device={props.device}
                    onCardClick={props.onCardSelect}
                    setCardActive={props.setCardActive}
                    openViewer={props.openViewer}
                    dSpeedEnd={1.10}
                    dSpeedGap={0.12}
                />
            </div>
        </div>
    </section>);
}
