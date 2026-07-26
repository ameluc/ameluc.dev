/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file paragrapher.tsx
 * @version 0.2.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains different text container component each with unique animations.
*/

"use client"

import type { ReactElement } from "react";
import type { Texts } from "@/lib/ameluc";

/**
 * The base component that contains the texts.
 * @returns a react element.
*/
export function Paragrapher(props: Texts): ReactElement {
    return (<div id={props.id} className={props.className}>
        {props.content.map((element, index): ReactElement =>
            (<p className={`${props.alignment} ${props.size}`} key={`${props.id}-text-${index}`}>
                {element}
            </p>)
        )}
    </div>);
}
