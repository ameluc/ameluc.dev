/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file cardviewer.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains a card component that will be used to display some
 * images in an elegant way.
*/

"use client"

import type { ReactElement } from "react";
import type { CardViewer } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ImgOptimiser } from "@/lib/ui/bases/image";
import { playwrite } from "@/lib/ui/fonts";
import { buttonStyle } from "@/lib/ui/styles";
import gsap from "@/lib/animation";
import { SplitText } from "gsap/SplitText";

/**
 * The card component that displays additional informations.
 * @param props
 * @returns JSX a react element.
*/
export function CardViewer(props: CardViewer): null | ReactElement {
    if (!props.card) return null;

    const { contextSafe } = useGSAP(() => {
        const sourceCard: null | HTMLElement = document.getElementById(`${props.activeCard}`);
        const cloneCard: null | HTMLElement = document.querySelector("#card-img");

        if (!sourceCard || !cloneCard) throw new Error("Not found error: Cards are missing!");

        const texth3: NodeListOf<Element> = document.querySelectorAll("#card-info h3");
        const texth4: NodeListOf<Element> = document.querySelectorAll("#card-info h4");
        const texts: NodeListOf<Element> = document.querySelectorAll("#card-info li");

        const splitH3: globalThis.SplitText = SplitText.create(texth3, { "type": "words" });

        gsap.timeline()
        .from("#card-viewer", {
            "duration": 0.8,
            "ease": "power3.out",
            "autoAlpha": 0.0
        })
        .from("#card-info", {
            "duration": 0.5,
            "ease": "back.inOut(1.2)",
            "autoAlpha": 0.0,
            "scale": 1.2
        }, "-=0.4")
        .from(cloneCard, {
            "duration": 0.6,
            "ease": "back.inOut(1.2)",
            "autoAlpha": 0.0,
            "scale": 0.0,
            "y": -180
        }, "-=0.6")
        .from(splitH3.words, {
            "duration": 0.6,
            "ease": "back.inOut(2.4)",
            "stagger": {
                "each": 0.05
            },
            "autoAlpha": 0.0,
            "y": -10
        }, "-=0.2")
        .from(texth4, {
            "duration": 0.3,
            "ease": "back.inOut(3.2)",
            "autoAlpha": 0.0,
            "x": -10
        })
        .from(texts, {
            "duration": 0.3,
            "ease": "back.inOut(3.2)",
            "stagger": {
                "each": 0.05
            },
            "autoAlpha": 0.0,
            "x": -10
        });
    }, { "dependencies": [] });
    const closeModal = contextSafe(() => {
        gsap.timeline()
        .to("#card-img", {
            "duration": 0.4,
            "ease": "back.inOut(1.2)",
            "autoAlpha": 0.0,
            "scale": 0.0,
            "y": -200
        })
        .to("#card-info", {
            "duration": 0.6,
            "ease": "back.inOut(1.2)",
            "autoAlpha": 0.0,
            "scale": 0.0
        }, "-=0.2")
        .to("#card-viewer", {
            "duration": 0.8,
            "ease": "power3.out",
            "autoAlpha": 0.0,
            "onComplete": props.onClose
        }, "-=0.2");
    });

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => { document.body.style.overflow = ""; };
    }, []);
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") closeModal();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => { window.removeEventListener("keydown", handleKeyDown); }
    }, []);

    const structure: ReactElement = (<div id={`card-viewer`} className={`fixed z-40 inset-0 p-4 md:p-8 backdrop-blur-md bg-slate-400/10 dark:bg-black/10 flex flex-col justify-center md:justify-end items-center`} onClick={closeModal}>
        <div id={`card-info`} className={`w-full md:w-fit h-auto rounded-[48px] lg:rounded-[68px] px-4 py-4 md:py-8 backdrop-blur-lg bg-gray-200/40 dark:bg-black/40 shadow-sm flex flex-col justify-center items-center`} onClick={(e) => { e.stopPropagation(); }}>
            <div id={`card-img`} className={`relative w-full h-56 rounded-[32px] md:rounded-[48px] mb-6 overflow-hidden`}>
                <ImgOptimiser
                    className={`object-cover`}
                    src={props.card.imgSrc}
                    alt={props.card.imgAlt}
                    fill={true}
                />
            </div>
            <h3 className={`w-[85%] mb-3 ${playwrite.className} text-xl`}>
                {props.card.workTitle}
            </h3>
            <div className={`w-[85%] mb-4 h-auto`}>
                <h4 className={`text-xl`}>
                    {props.card.info[0]}
                </h4>
                <ul className={`list-disc pl-6`}>
                    {props.card.info.slice(1).map((element, index) => (<li key={`Tech-${index}`}>{element}</li>))}
                </ul>
            </div>
            <div className={`w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-4`} >
                <a className={`${buttonStyle} bg-cyan-600 text-white`} href={props.card.imgLink} target={`_blank`}>
                    {props.card.imgLinkText}
                </a>
                <button className={`${buttonStyle} bg-gray-50 dark:bg-gray-700`} type="button" onClick={closeModal}>
                    {props.closeText}
                </button>
            </div>
        </div>
    </div>);

    return createPortal(structure, document.body);
}
