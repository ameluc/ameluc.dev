/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file card.tsx
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
import type { Card } from "@/lib/ameluc";
import { useRef, useState } from "react";
import { ImgOptimiser } from "@/lib/ui/bases/image";

/**
 * The base card component that will be used elegantely.
 * The purpose is to allow us to use indivudial states.
 * So we don't have to get messy inside the animatable components.
 * @returns a react element.
*/
export function BaseCard(props: Card): ReactElement {
    const [ isHovered, setIsHovered ] = useState<boolean>(false);
    const cardRef: RefObject<null | HTMLDivElement> = useRef(null);
    const titleFrame: ReactElement = (<h3 className={"w-full h-auto fixed bottom-0 py-4 bg-black/60 text-center text-white"}>
        {props.card.workTitle}
    </h3>);

    return (<div
        id={props.id}
        className={`${props.className} relative cursor-pointer`}
        style={props.style}
        onClick={props.onClick}
        ref={cardRef}
        data-speed={props.dSpeed && `clamp(${props.dSpeed})`}
        onMouseEnter={(): void => { setIsHovered(true); }}
        onMouseLeave={(): void => { setIsHovered(false); }}>
        <ImgOptimiser
            className={`${props.imgAttr.className} ${props.imgAttr.aspect}`}
            src={props.card.imgSrc}
            alt={props.card.imgAlt}
            // width={props.imgAttr.width}
            // height={props.imgAttr.height}
            fill={true}
            sizes={props.imgAttr.sizes}
        />
        {isHovered && titleFrame}
    </div>);
}
