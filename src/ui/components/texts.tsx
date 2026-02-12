/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file layout.tsx
 * @version 0.1.0
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
import type { BaseProps, TextBaseProps } from "@/lib/ameluc";

/**
 * The base component that contains the texts.
 * @returns a react element.
*/
export function Base(props: BaseProps & TextBaseProps): ReactElement {
    return (<div>{
        props.localContent.map((element, index) => {
            return (<p key={`${props.id}-text-${index}`}>{element}</p>);
        })
    }</div>);
}
