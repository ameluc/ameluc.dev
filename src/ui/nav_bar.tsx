/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file nav_bar.tsx
 * @version 0.2.0
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
import { Switch } from "@/ui/switch";
import { ArrowDown, ArrowUp, Message } from "./icons";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function NavBar({ id, className, localContent }: BaseProps & NavBarProps): ReactElement {
    const [ isHovered1, setIsHovered1 ] = useState<boolean>(false);
    const [ isHovered2, setIsHovered2 ] = useState<boolean>(false);
    const iconSize: number = 24;
    const sharedStyles: string = `flex flex-row items-center justify-center gap-2`;

    return (<nav id={id} className={className}>
        <a className={sharedStyles} href={`https://www.github.com/ameluc`} aria-label={localContent.github} target={`_blank`}
                onMouseEnter={() => { setIsHovered1(true) }}
                onMouseLeave={() => { setIsHovered1(false) }}>
            <Image
                src={`/GitHub_Invertocat_White.png`}
                alt={localContent.github}
                width={iconSize}
                height={iconSize}
            />
        </a>
        <a className={sharedStyles} href={`https://www.linkedin.com/in/ameluc`} aria-label={localContent.linkedin} target={`_blank`}
                onMouseEnter={() => { setIsHovered2(true) }}
                onMouseLeave={() => { setIsHovered2(false) }}>
            <Image
                src={`/InBug-White.png`}
                alt={localContent.linkedin}
                width={iconSize}
                height={iconSize}
            />
        </a>
        <a href={`/#contact-info`} aria-label={`contact_me`}>
            <Message id={`contact_me_icon`} width={iconSize} height={iconSize} color={"#ffffff"} />
        </a>
        <a href={`/#intro`} aria-label={`refresh_page`}>
            <ArrowUp id={`refresh_page_icon`} width={iconSize} height={iconSize} color={"#ffffff"} />
        </a>
        <a href={`/#credits-section`} aria-label={`go_to_credit_icon`}>
            <ArrowDown id={`go_to_credit_icon`} width={iconSize} height={iconSize} color={"#ffffff"} />
        </a>
        <Switch width={40} height={iconSize} />
    </nav>);
}
