/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file cardstacker.tsx
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

import type { MouseEvent, ReactElement, RefObject } from "react";
import type { CardStacker } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMemo, useRef } from "react";
import { ImgOptimiser } from "@/lib/ui/bases/image";
import gsap from "@/lib/animation";

/**
 * The card component that uses stacking animation.
 * @param props
 * @returns JSX a react element.
*/
export function CardStacker(props: CardStacker): ReactElement {
    const cardsRef: RefObject<Record<string, null | HTMLImageElement>> = useRef({});
    const stackerRef: RefObject<null | HTMLDivElement> = useRef(null);
    const rotations: Array<number> = useMemo(
        () => props.content.map(() => gsap.utils.random(-6, 6, 1)),
        [props.content]
    );

    const { contextSafe } = useGSAP(() => {
        const onDesktop: boolean = props.device === "desktop";
        const pinStart: string = onDesktop ? "top 40%" : "top center";
        const pinEnd: string = onDesktop ? "72.5%" : "67.5%";

        gsap.utils.toArray<HTMLImageElement>(".stack-target").forEach((card, index): void => {
            const cardRotation: number = rotations[index];
            const cardScale: number = (
                index !== cards.length - 1 ?
                (1 - (props.animParams.scale * (cards.length - index))) + props.animParams.scale :
                1
            );

            gsap.set(card, {
                "transformOrigin": "center center",
                "y": 60,
                "opacity": 0.00,
                "zIndex": index + 1,
            });
            gsap.to(card, {
                "scale": cardScale,
                "ease": "back.inOut(1.4)",
                "scrollTrigger": {
                    "trigger": card,
                    "start": pinStart,
                    "end": () => `+=${(cards.length - index) * card.offsetHeight} ${pinEnd}`,
                    "scrub": true,
                    "pin": card,
                    "pinSpacing": false,
                    "invalidateOnRefresh": true
                }
            });
            ScrollTrigger.create({
                "trigger": card,
                "start": "top 90%",
                "onEnter": (): void => {
                    card.dataset.active = "true";

                    gsap.to(card, {
                        "duration": 0.60,
                        "ease": "back.inOut(2.0)",
                        "rotation": cardRotation,
                        "opacity": 1.00
                    });
                },
                "onLeave": (): void => {
                    card.dataset.active = "false";
                },
                "onEnterBack": (): void => {
                    card.dataset.active = "true";
                },
                "onLeaveBack": (): void => {
                    card.dataset.active = "false";

                    gsap.to(card, {
                        "duration": 0.60,
                        "ease": "back.inOut(2.0)",
                        "rotation": 0.00,
                        "opacity": 0.00
                    });
                },
                "invalidateOnRefresh": true
            });
        });
    }, { "dependencies": [], "scope":  stackerRef });
    const handleSelect = contextSafe((event: MouseEvent) => {
        const card: null | HTMLImageElement = event.currentTarget as HTMLImageElement;

        if (!card) return;
        if (card.dataset.active !== "true") return;

        gsap.to(card, {
            "duration": 0.60,
            "ease": "back.inOut(2.0)",
            "rotation": 0.00
        });
    });
    const handleHoverEnd = contextSafe((event: MouseEvent) => {
        const card: null | HTMLImageElement = event.currentTarget as HTMLImageElement;
        const cardIndex: number = Object.entries(cardsRef.current).findIndex(cardEl => cardEl[0] === card.id);

        if (!card) return;
        if (card.dataset.active !== "true") return;

        gsap.to(card, {
            "duration": 0.60,
            "ease": "back.inOut(2.0)",
            "rotation": rotations[cardIndex]
        });
    });

    const cards: Array<ReactElement> = props.content.map((element, index) =>
        (<ImgOptimiser
            id={`stacked-card-${index}`}
            className={`stack-target rounded-[40px] shadow-sm`}
            src={element.imgSrc}
            alt={element.imgAlt}
            width={props.uniformImgSizes.width}
            height={props.uniformImgSizes.height}
            key={`stacked-card-${index}`}
            ref={(node) => {
                cardsRef.current[`stacked-card-${index}`] = node;

                return () => { delete cardsRef.current[`stacked-card-${index}`]; };
            }}
            onClick={handleSelect}
            onMouseLeave={handleHoverEnd}
        />)
    );

    return (<div id={`card-stacker`} className={props.className} ref={stackerRef}>{cards}</div>);
}
