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

import { useState, type ReactElement } from "react";
import type { BaseProps, VisualCardProps } from "@/lib/ameluc";
import Image from "next/image";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export default function VisualCard(props: BaseProps & VisualCardProps): ReactElement {
    const [ isActive, setIsActive ] = useState<boolean>(false);

    return (<div id={props.id} className={props.className} key={props.key} onClick={() => { setIsActive(prev => !prev) }}>
        <Image
            className={``}
            src={props.imageAttributes.src}
            alt={props.imageAttributes.alt}
            width={props.imageAttributes.width}
            height={props.imageAttributes.height}
        />
        {props.workTitle}
        {isActive && <div>{
            props.info.map(
                (element, index) => <p id={`${props.workTitle}-${index}`} key={`${props.workTitle}-${index}`}>
                    {element}
                </p>
            )
        }</div>}
    </div>);
}
