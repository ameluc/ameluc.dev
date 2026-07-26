/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file sec_data.tsx
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
import type { SecAnalyst } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { Paragrapher } from "@/lib/ui/bases/paragrapher";
import { CardSlider } from "@/lib/ui/containers/cardslider";
import { playwrite } from "@/lib/ui/fonts";
import { sectionAspect } from "@/lib/ui/styles";
import gsap from "@/lib/animation";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function SectionAnalyst(props: SecAnalyst): ReactElement {
    useGSAP(() => {
        const wideScreen =
        gsap.from("#data-analysis-diapo", {
            "display": "none",
            "opacity": 0.00,
            "y": -100,
            "scrollTrigger": {
                "trigger": "#data-analysis-diapo",
                "scrub": 1.00,
                "start": "top 85%",
                "end": "20% 80%"
            }
        });
        gsap.to("#data-p", {
            "scrollTrigger": {
                "pin": props.device === "desktop" && window.innerWidth >= 1024,
                "trigger": "#data-p",
                "start": "top 40%",
                "endTrigger": "#data-analysis-diapo",
                "end": "bottom 70%"
            }
        });
    }, { "dependencies": [] });

    return (<section
        id={`data-analysis-diapo`}
        className={`${sectionAspect} py-25 gap-15 border-t border-slate-200 dark:border-slate-800`}>
        <h2 className={`${playwrite.className} text-2xl`}>
            {props.content.title}
        </h2>
        <div className={`w-full md:w-[80%] flex flex-col lg:flex-row items-center md:justify-center lg:items-start gap-8`}>
            <Paragrapher
                id={`data-p`}
                className={`w-full md:mt-6`}
                content={props.content.text}
                alignment={`text-center lg:text-right`}
                size={`text-lg`}
                device={props.device}
            />
            <CardSlider
                className={`w-full flex flex-col items-center gap-10`}
                content={props.content.worksDetails}
                setCardActive={props.setCardActive}
                onCardClick={props.onCardSelect}
                openViewer={props.openViewer}
                device={props.device}
            />
        </div>
    </section>);
}
