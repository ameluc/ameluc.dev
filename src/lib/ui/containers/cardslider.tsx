/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file cardslider.tsx
 * @version 0.6.0
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

import type { ReactElement, RefObject } from "react";
import type { CardSlider } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { BaseCard } from "@/lib/ui/bases/card";
import gsap from "@/lib/animation";

/**
 * The card component that uses sliding animation.
 * @param props
 * @returns JSX a react element.
*/
export function CardSlider(props: CardSlider): ReactElement {
    const sliderRef: RefObject<null | HTMLDivElement> = useRef(null);

    useGSAP(() => {
        gsap.utils.toArray<HTMLElement>(".translate-targets").forEach((panel): void => {
            if (props.device === "desktop") {
                gsap.from(panel, {
                    "duration": 2.5,
                    "autoAlpha": 0.0,
                    "ease": "circ.inOut",
                    "xPercent": 100,
                    "scrollTrigger": {
                        "trigger": panel,
                        "scrub": true,
                        "start": "top 95%",
                        "end": "bottom 60%"
                    }
                });
            } else {
                gsap.from(panel, {
                    "duration": 2.5,
                    "autoAlpha": 0.0,
                    "ease": "circ.inOut",
                    "scale": 1.10,
                    "scrollTrigger": {
                        "trigger": panel,
                        "scrub": true,
                        "start": "top 95%",
                        "end": "bottom 60%"
                    }
                });
            }
        });
    }, { "dependencies": [], "scope": sliderRef});

    const cards: Array<ReactElement> = props.content.map((element, index): ReactElement => {
        const cardUID: string = `card-slider-element-${index}`;
        const cardSizes: string = `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`

        return (<div className={`translate-targets`} key={cardUID}>
            <BaseCard
                id={cardUID}
                className={`w-80 h-55 md:w-sm md:h-80 lg:h-60 rounded-4xl shadow-sm overflow-hidden transition lg:delay-200 lg:duration-300 lg:ease-in-out hover:scale-105`}
                card={element}
                imgAttr={{ "aspect": "object-cover", "sizes": cardSizes }}
                onClick={() => {
                    props.setCardActive(cardUID);
                    props.onCardClick(element);
                    props.openViewer(true);
                }}
            />
        </div>);
    });

    return (<div id={`card-slider`} className={props.className} ref={sliderRef}>{cards}</div>);
}
