/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file section.tsx
 * @version 0.3.0
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
import type { BaseProps, SectionInfoProps, SectionProps } from "@/lib/ameluc";
import { playwrite } from "@/ui/fonts";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function Section(props: BaseProps & SectionProps): ReactElement {
    return (<section id={props.id} className={props.className}>
        <h2 className={`${playwrite.className} text-2xl`}>{props.localContent.title}</h2>
        <div className="flex flex-col items-center justify-center">
            {props.localContent.text.map((element, index) => {
                return (<p className={"text-center text-lg "} key={`${props.id}-text-${index}`}>
                    {element}
                </p>);
            })}
        </div>
        {props.children && <div>{props.children}</div>}
    </section>);
}

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function SectionInfo(props: BaseProps & SectionInfoProps): ReactElement {
    return (<section id={props.id} className={props.className}>
        <div className="flex flex-col gap-3">
            <h1 className={`${playwrite.className} text-4xl`}>{props.localContent.title1}</h1>
            <h1 className={`${playwrite.className} text-3xl`}>{props.localContent.title2}</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
            {props.localContent.text.map((element, index) => {
                return (<p className={"text-center text-lg "} key={`${props.id}-text-${index}`}>
                    {element}
                </p>);
            })}
        </div>
    </section>);
}
