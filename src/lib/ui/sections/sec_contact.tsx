/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file sec_contact.tsx
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
import type { SecContact } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { Paragrapher } from "@/lib/ui/bases/paragrapher";
import { playwrite } from "@/lib/ui/fonts";
import { sectionAspect } from "@/lib/ui/styles";
import gsap from "@/lib/animation";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function SectionContact(props: SecContact): ReactElement {
    useGSAP((): void => {
        gsap.from("#contact-info", {
            "duration": 1.50,
            "ease": "power4.inOut",
            "opacity": 0.00,
            "scrollTrigger": {
                "scrub": true,
                "trigger": "#contact-info",
                "start": "top 60%",
                "end": "bottom 95%"
            }
        });
    }, { "dependencies": [] });

    return (<section
        id={`contact-info`}
        className={`${sectionAspect} gap-10 py-56 md:py-80 lg:py-56 border-t border-slate-200 dark:border-slate-800`}>
        <h2 className={`${playwrite.className} text-2xl`}>
            {props.content.title}
        </h2>
        <Paragrapher
            id={`contact-me-p`}
            className={`w-full flex flex-col items-center justify-center`}
            content={props.content.text}
            alignment={`text-center`}
            size={`text-lg`}
            device={props.device}
        />
        <div>
            <a
                className={"text-center text-xl text-cyan-700 dark:text-slate-400 font-bold"}
                href="mailto:ameluc.ahognidje@protonmail.com">
                {props.content.link1}
            </a>
        </div>
    </section>);
}
