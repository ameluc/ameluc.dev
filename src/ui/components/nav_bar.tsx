/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file nav_bar.tsx
 * @version 0.3.5
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the navigation bar component.
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps, NavBarProps } from "@/lib/ameluc";
import Image from "next/image";
import { useState } from "react";
import { icons } from "@/ui/components/icons";
import { Switch } from "@/ui/components/switch";
import { playwrite } from "@/ui/fonts";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function NavBar(props: BaseProps & NavBarProps): ReactElement {
    const [ isHovered1, setIsHovered1 ] = useState<boolean>(false);
    const [ isHovered2, setIsHovered2 ] = useState<boolean>(false);
    const iconSize: number = 24;
    const sharedStyles: string = `flex flex-row items-center justify-center gap-2`;

    return (<nav id={props.id} className={props.className}>
        <a href={`https://www.github.com/ameluc`}
            className={sharedStyles}
            aria-label={props.localContent.github}
            target={`_blank`}
            onMouseEnter={() => { setIsHovered1(true) }}
            onMouseLeave={() => { setIsHovered1(false) }}
            >
            <Image
                src={`/GitHub_Invertocat_White.png`}
                alt={props.localContent.github}
                width={iconSize}
                height={iconSize}
            />
        </a>
        <a href={`https://www.linkedin.com/in/ameluc`} target={`_blank`}
            className={sharedStyles}
            aria-label={props.localContent.linkedin}
            onMouseEnter={() => { setIsHovered2(true) }}
            onMouseLeave={() => { setIsHovered2(false) }}
            >
            <Image
                src={`/InBug-White.png`}
                alt={props.localContent.linkedin}
                width={iconSize}
                height={iconSize}
            />
        </a>
        {/* <a href={`/#contact-info`} */}
        <a href={`mailto:ameluc.ahognidje@protonmail.com`}
            aria-label={`contact_me`}>
            <icons.message id={`contact_me_icon`} width={iconSize} height={iconSize} color={"#ffffff"} />
        </a>
        {/* <a href={`/#intro`}
            aria-label={`refresh_page`}>
            <icons.arrowUp id={`refresh_page_icon`} width={iconSize} height={iconSize} color={"#ffffff"} />
        </a> */}
        <h1 className={`${playwrite.className}`}>{`Gallerie Améluc`}</h1>
        <Switch width={40} height={iconSize} />
    </nav>);
}
