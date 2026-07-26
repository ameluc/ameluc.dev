/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file cardskewer.tsx
 * @version 0.7.0
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
import type { CardSkewer } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { BaseCard } from "@/lib/ui/bases/card";
import gsap from "@/lib/animation";

/**
 * The card component that uses skewing animation.
 * @returns a react element.
*/
export function CardSkewer(props: CardSkewer): ReactElement {
    useGSAP(() => {
        const clampSkew = gsap.utils.clamp(-10, 10);
        const skewTarget: gsap.QuickToFunc = gsap.quickTo(".skew-targets", "skewY");
        gsap.timeline({
            "scrollTrigger": {
                "scrub": true,
                "trigger": props.id,
                "onUpdate": (self) => skewTarget(clampSkew(self.getVelocity()))
            }
        });
    }, { "dependencies": [] });

    const cards: Array<ReactElement> = props.content.map((element, index, elements) => {
        const cardUID: string = `${element.workTitle}-${index}`;
        const dSpeed: number = Math.floor((props.dSpeedEnd - props.dSpeedGap * (elements.length - index)) * 100) / 100;

        return (<BaseCard
            id={cardUID}
            key={cardUID}
            className={`skew-targets w-40 md:w-80 h-40 md:h-80 lg:w-56 lg:h-56 shadow-sm`}
            card={element}
            imgAttr={{ "aspect": "object-cover" }}
            dSpeed={dSpeed}
            onClick={(): void => {
                props.setCardActive(cardUID);
                props.onCardClick(element);
                props.openViewer(true);
            }}
        />);
    });

    return (<div id={`card-skewer`} className={props.className}>{cards}</div>);
}
