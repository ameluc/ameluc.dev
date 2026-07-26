/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file sec_intro.tsx
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
import type { SecIntro } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { Paragrapher } from "@/lib/ui/bases/paragrapher";
import { playwrite } from "@/lib/ui/fonts";
import gsap from "@/lib/animation";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function SectionIntro(props: SecIntro): ReactElement {
    useGSAP(() => {
        gsap.timeline()
        .to("#intro-section", {
            "duration": 1.00,
            "autoAlpha": 0
        }, "+=0.80")
        .to("#intro-section h2, #intro-p", {
            "duration": 1.00,
            "y": -80
        }, "-=0.80")
        .to("#intro-section", {
            "duration": 0.2,
            "display": "none"
        });
    }, { "dependencies": [] });

    return (<section id={`intro-section`}
        className={`fixed z-50 w-screen h-screen top-0 bg-[#fbfafc]/60 dark:bg-slate-900/60 backdrop-blur-3xl flex flex-col justify-center gap-4`}>
        <h2 className={`${playwrite.className} text-2xl text-center`}>
            <div>{props.content.title}</div><div>Gallerie Améluc</div>
        </h2>
        <Paragrapher
            id={`intro-p`}
            className={`w-full flex justify-center`}
            content={props.content.text}
            alignment={`text-center`}
            size={`text-lg`}
            device={props.device}
        />
    </section>);
}
