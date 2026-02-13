/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file card.tsx
 * @version 0.5.5
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
import type { BaseProps, CardProps, CardSkewerProps, CardStackerProps, CardStackerProps1 } from "@/lib/ameluc";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useState } from "react";
import { useSmoother } from "@/ui/components/scroller";

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
            className={isActive ? `${props.className}`: props.className}
            style={props.style}
            onClick={() => {
                setIsActive(prev => !prev);
                setIsHovered(false);
            }}
            onMouseEnter={() => {setIsHovered(true)}}
            onMouseLeave={() => {setIsHovered(false)}}>
        <Image className={props.imgAttr.className}
            src={props.imgAttr.src}
            alt={props.imgAttr.alt}
            width={props.imgAttr.width}
            height={props.imgAttr.height}
        />
        {props.showTitleOnHover && isHovered &&
            <h3 className={isHovered ? "w-full h-auto fixed bottom-0 py-4 bg-black/20 text-center text-white" : ""}>
                {props.workTitle}
            </h3>
        }
        {isActive && <div className="border-l ">
            <h3 className={"text-2xl"}>{props.workTitle}</h3>
            <div>{infoParagraphs}</div>
        </div>}
    </div>);
}
/**
 * The card component that uses skewing animation.
 * @returns a react element.
*/
export function CardSkewer(props: BaseProps & CardSkewerProps): ReactElement {
    useGSAP(() => {
        const clampSkew = gsap.utils.clamp(-10, 10);
        const skewer: gsap.QuickToFunc= gsap.quickTo(".skew-targets", "skewY");
        const timeLine: gsap.core.Timeline = gsap.timeline({
            "scrollTrigger": {
                "trigger": props.id,
                "scrub": 1,
                "onUpdate": self => skewer(clampSkew(self.getVelocity())),
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
                showTitleOnHover={false}
                workTitle={element.workTitle}
                info={element.info}
                key={`${element.workTitle}-${index}`}
            />);
        })
    }</div>);
}
/**
 * The card component that uses stacking animation.
 * @param props
 * @returns JSX a react element.
*/
/* export function CardStacker(props: BaseProps & CardStackerProps): ReactElement {
    const smoother = useSmoother();

    useGSAP(() => {

        const cards: Array<HTMLElement> = gsap.utils.toArray(".stack-targets");

        cards.forEach((panel, index, array) => {
            gsap.to(
                panel,
                {
                    "scale": index !== array.length - 1 ? (1 - (props.animParams.scale * (array.length - index))) + props.animParams.scale : 1,
                    "scrollTrigger": {
                        "trigger": panel,
                        "markers": true,
                        "id": `${index}`,
                        "scrub": props.animParams.scrollTrigger?.scrub,
                        "snap": {
                            "snapTo": 1 / (array.length - 1),
                            "duration": { min: 0.2, max: 3 },
                            "delay": 0.2
                        },
                        "start": `top ${props.stackStart + (5 * index)}%`
                    }
                }
            );
        });
    });

    return (<div id={`cards-stacker`} className={props.className}>
        {
            props.localContents.map((element, index) => {
                return (<BaseCard className={`stack-targets sticky ${props.sharedStyles}`}
                    style={{
                        "top": `${props.stackStart + (5 * index)}%`
                    }}
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
        }
        <div style={{
            "position": "sticky",
            "top": "70%",
            "height": props.uniformImgSizes.height
        }} />
    </div>);
} */
/* export function CardStacker(props: BaseProps & CardStackerProps): ReactElement {
    const smoother = useSmoother();

    useGSAP(() => {

        const cards: Array<HTMLElement> = gsap.utils.toArray(".stack-targets");

        cards.forEach((panel, index, array) => {
            const dynamicScale: number = (1 - (props.animParams.scale * (array.length - index)));

            gsap.to(
                panel,
                {
                    "scale": dynamicScale,
                    "scrollTrigger": {
                        "trigger": panel,
                        "markers": true,
                        "id": `${index}`,
                        "scrub": props.animParams.scrollTrigger?.scrub,
                        "snap": {
                            "snapTo": 1 / (array.length - 1),
                            "duration": { min: 0.2, max: 3 },
                            "delay": 0.2
                        },
                        "start": `top ${props.stackStart + (5 * index)}%`
                    }
                }
            );
        });
    });

    return (<div id={`cards-stacker`} className={props.className}>
        {
            props.localContents.map((element, index) => {
                return (<BaseCard className={`stack-targets sticky ${props.sharedStyles}`}
                    style={{
                        "top": `${props.stackStart + (5 * index)}%`
                    }}
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
        }
        <div style={{
            "position": "sticky",
            "top": "70%",
            "height": props.uniformImgSizes.height
        }} />
    </div>);
} */
export function CardStacker(props: BaseProps & CardStackerProps1): ReactElement {
    const smoother = useSmoother();

    useGSAP(() => {

        const cards: Array<HTMLElement> = gsap.utils.toArray(".translate-targets");

        cards.forEach((panel, index, array) => {
            gsap.from(
                panel,
                {
                    "opacity": 0.0,
                    // "display": "none",
                    "xPercent": 100,
                    // "delay": -1.5,
                    "duration": 2.5,
                    "ease": "circ.inOut",
                    "scrollTrigger": {
                        "trigger": panel,
                        // "markers": true,
                        // "id": `${index}`,
                        "scrub": true,
                        // "scroller": smoother.wrapper(),
                        // "snap": {
                        //     "snapTo": 1 / (array.length - 1),
                        //     "duration": { min: 0.2, max: 3 },
                        //     "delay": 0.2
                        // },
                        "start": `top 95%`,
                        "end": "bottom 60%"
                    }
                }
            );
        });
    });


    return (<div id={`cards-stacker`} className={props.className}>
        {
            props.localContents.map((element, index) => {
                return (<div className={`translate-targets ${props.sharedOuterStyles}`} key={`${element.workTitle}-${index}`}>
                    <BaseCard className={`${props.sharedInnerStyles}`}
                        imgAttr={{
                            "src": element.imageSrc,
                            "alt": element.imageAlt,
                            "width": props.uniformImgSizes.width,
                            "height": props.uniformImgSizes.height
                        }}
                showTitleOnHover={true}
                        workTitle={element.workTitle}
                        info={element.info}
                    />
                </div>
                );
            })
        }
    </div>);
}

// /**
//  * A compound component of cards.
//  * @property skewer: a card component that uses skewing animation.
//  * @property stacker: a card component that uses stacking animation.
// */
// export const Cards = {
//     "skewer": CardSkewer,
//     "stacker": CardStacker
// };
