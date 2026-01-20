/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file section.tsx
 * @version 0.2.1
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the section component.
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
export function Section(props: BaseProps & SectionProps): ReactElement {
    return (<section id={props.id} className={props.className}>
        <h2>{props.localContent.title}</h2>
        <div>{props.localContent.text.map((element, index) => <p key={`${props.id}-text-${index}`}>{element}</p>)}</div>
        {props.children && <div>{props.children}</div>}
    </section>);
}
