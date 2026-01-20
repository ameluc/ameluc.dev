/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file frame.tsx
 * @version 0.2.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains a special section component.
 * It just helps decluster the main page.tsx file.
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps, SectionProps } from "@/lib/ameluc";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Frame(props: BaseProps & SectionProps): ReactElement {
    return (<div id={props.id} className={props.className} onClick={props.onClick}>
        {props.isActive ? <>
            <h2>{props.localContent.title}</h2>
            <div>{props.localContent.text.map((element, index) => <p key={`${props.id}-text-${index}`}>{element}</p>)}</div>
            {props.children && <div>{props.children}</div>}
        </> : <>
            <h2>{props.localContent.title}</h2>
        </>}
    </div>);
}
