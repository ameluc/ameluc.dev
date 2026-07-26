/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file sec_info.tsx
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
import type { SecInfo } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { Paragrapher } from "@/lib/ui/bases/paragrapher";
import { CardStacker } from "@/lib/ui/containers/cardstacker";
import { playwrite } from "@/lib/ui/fonts";
import { sectionAspect, infoTextGroup } from "@/lib/ui/styles";
import gsap from "@/lib/animation";
import { SplitText } from "gsap/SplitText";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function SectionInfo(props: SecInfo): ReactElement {
    useGSAP(() => {
        // gsap.to("#main-title-group", {
        //     "scale": 0.5,
        //     "opacity": 0.75,
        //     "duration": 2.0,
        //     "ease": "circ.inOut",
        //     "scrollTrigger": {
        //         "trigger": "#cards-stacker",
        //         "scrub": true,
        //         "pin": true,
        //         "start": ,
        //         "end": "bottom 90%"
        //     }
        // });
        const splitInfo: globalThis.SplitText = SplitText.create("#info-texts-group p", {"type": "chars", "smartWrap": true});

        if (props.device !== "desktop") {
            gsap
            .from(splitInfo.chars, {
                "opacity": 0.2,
                "ease": "circ.inOut",
                "stagger": {
                    "each": 0.05
                },
                "scrollTrigger": {
                    "trigger": splitInfo.chars,
                    "scrub": true,
                    "pin": "#info-texts-group",
                    "start": "clamp(top center)" ,
                    // markers: true
                }
            });
        }
    }, { "dependencies": [] });

    return (<section
        id={`personal-info`}
        className={`${sectionAspect} py-60`}>
        <div id={`main-title-group`} className={`w-full mb-10 md:mb-15 flex flex-col gap-3`}>
            <h1 className={`${playwrite.className} text-3xl md:text-4xl text-center`}>
                <span className={`block md:inline`}>{props.content.title1}</span>
                <span className={`block md:inline`}>Améluc Ahognidjè</span>
            </h1>
            <h1 className={`w-[60%] md:w-full mx-auto ${playwrite.className} text-xl md:text-3xl text-center`}>
                {props.content.title2}
            </h1>
        </div>
        <div id={`info-texts-group`} className={`w-full md:w-[80%] md:mb-10  flex flex-col lg:flex-row md:justify-center items-center lg:items-start md:gap-6`}>
            <Paragrapher
                id={`auto-intro-p-1`}
                className={`${infoTextGroup}`}
                content={props.content.text1}
                alignment={`text-center lg:text-end`}
                size={`text-lg`}
                device={props.device}
            />
            <Paragrapher
                id={`auto-intro-p-2`}
                className={`${infoTextGroup}`}
                content={props.content.text2}
                alignment={`text-center lg:text-start`}
                size={`text-lg`}
                device={props.device}
            />
        </div>
        {props.device !== "desktop" ? <div className={`w-full h-px py-60`} /> : <></>}
        <CardStacker
            className={`w-full px-6 lg:px-0 md:flex md:flex-col md:items-center`}
            content={props.content.selfDetails}
            uniformImgSizes={{ "width": 640, "height": 360 }}
            animParams={{ "scale": 0.01 }}
            device={props.device}
        />
    </section>);
}
