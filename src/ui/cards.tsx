/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file card.tsx
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
import type { BaseProps, CardProps, CardSkewerProps, CardStackerProps } from "@/lib/ameluc";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * The base card component that will be used elegantely.
 * The purpose is to allow us to use indivudial states.
 * So we don't have to get messy inside the animatable components.
 * @returns a react element.
*/
export function BaseCard(props: BaseProps & CardProps): ReactElement {
    const [ isActive, setIsActive ] = useState<boolean>(false);
    const [ isHovered, setIsHovered ] = useState<boolean>(false);
    const infoParagraphs = props.info.map((element, index) => {
        return (<p id={`${props.workTitle}-${index}`} key={`${props.workTitle}-${index}`}>
            {element}
        </p>);
    });

    return (<div id={props.id}
            className={props.className}
            onClick={() => setIsActive(prev => !prev)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        <Image className={props.imgAttr.className}
            src={props.imgAttr.src}
            alt={props.imgAttr.alt}
            width={props.imgAttr.width}
            height={props.imgAttr.height}
        />
        {isHovered && <h3>{props.workTitle}</h3>}
        {isActive && <div>{infoParagraphs}</div>}
    </div>);
}
/**
 * The card component that uses skewing animation.
 * @returns a react element.
*/
export function CardSkewer(props: BaseProps & CardSkewerProps): ReactElement {
    useGSAP(() => {
        const map = gsap.utils.mapRange(-2000, 2000, -15, 15);
        const skewer: gsap.QuickToFunc= gsap.quickTo(".skew-targets", "skewY");
        const timeLine: gsap.core.Timeline = gsap.timeline({
            "scrollTrigger": {
                "trigger": props.id,
                "scrub": 1,
                "onUpdate": self => skewer(map(self.getVelocity())),
            }
        });
    });

    return (<div id={`cards-skewer`} className={props.className}>{
        props.localContents.map((element, index) => {
            return (<BaseCard className={props.sharedStyles}
                imgAttr={{
                    "className": "skew-targets",
                    "src": element.imageSrc,
                    "alt": element.imageAlt,
                    "width": props.uniformImgSizes.width,
                    "height": props.uniformImgSizes.height
                }}
                workTitle={element.workTitle}
                info={element.info}
                key={`${element.workTitle}-${index}`}
            />);
        })
    }</div>);
}
/**
 * The card component that uses stacking animation.
 * @returns a react element.
*/
export function CardStacker(props: BaseProps & CardStackerProps): ReactElement {
    useGSAP(() => {
        const cards: Array<HTMLElement> = gsap.utils.toArray(".stack-targets");

        cards.forEach((panel, index, array) => {
            gsap.to(
                panel,
                {
                    "scaleX": index !== array.length - 1 ? 1 - (props.animationParams.scaleX * (array.length - index)) : undefined,
                    "scrollTrigger": {
                        "trigger": panel,
                        "scrub": props.animationParams.scrollTrigger.scrub,
                        "start": `${props.animationParams.scrollTrigger.triggerArea.start.el} ${props.animationParams.scrollTrigger.triggerArea.start.bg}`
                    }
                }
            );
        });
    });

    return (<div id={`cards-stacker`} className={props.className}>{
        props.localContents.map((element, index) => {
            return (<BaseCard className={`top-[${props.stackStart + (5 * index)}%] ${props.sharedStyles}`}
                imgAttr={{
                    "src": element.imageSrc,
                    "alt": element.imageAlt,
                    "width": props.uniformImgSizes.width,
                    "height": props.uniformImgSizes.height
                }}
                workTitle={element.workTitle}
                info={element.info}
                key={`${element.workTitle}-${index}`}
            />);
        })
    }</div>);
}

/**
 * A compound component of cards.
 * @property skewer: a card component that uses skewing animation.
 * @property stacker: a card component that uses stacking animation.
*/
export const Cards = {
    "skewer": CardSkewer,
    "stacker": CardStacker
};
