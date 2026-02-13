/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file section.tsx
 * @version 0.5.0
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
import { sectionInfoTextGroupStyles } from "@/ui/styles";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function Section(props: BaseProps & SectionProps): ReactElement {
    return (<section id={props.id} className={props.className}>
        <h2 className={`${playwrite.className} text-2xl`}>{props.localContent.title}</h2>
        <div className={props.innerDispo}>
            <div className="w-full flex flex-col items-center justify-center">
                {props.localContent.text.map((element, index) => {
                    return (<p className={"text-center text-lg "} key={`${props.id}-text-${index}`}>
                        {element}
                    </p>);
                })}
            </div>
            {props.separator &&
                <div className={"w-fit h-full flex items-center justify-center bg-[#fbfafc]"}>
                    <div className={"w-px h-full md:w-[2px] bg-slate-200"}></div>
                </div>
            }
            {props.children &&
                <div className="w-full flex flex-col items-center justify-center">
                    {props.children}
                </div>
            }
        </div>
    </section>);
}
/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function SectionInfo(props: BaseProps & SectionInfoProps): ReactElement {

    return (<section id={props.id} className={props.className}>
        <div id={"main-title-group"} className="flex flex-col gap-3">
            <h1 className={`${playwrite.className} text-4xl`}>{props.localContent.title1}</h1>
            <h1 className={`${playwrite.className} text-3xl`}>{props.localContent.title2}</h1>
        </div>
        <div id={"texts-group"} className={"w-full md:w-[80%] h-auto flex flex-col md:flex-row items-center justify-center gap-6"}>
            <div className={sectionInfoTextGroupStyles}>
                {props.localContent.text1.map((element, index) => {
                    return (<p className={"w-full text-center text-lg "} key={`${props.id}-text-${index}`}>
                        {element}
                    </p>);
                })}
            </div>
            <div className={"w-fit h-full flex items-center justify-center bg-[#fbfafc]"}>
                <div className={"w-px h-full md:w-[2px] bg-slate-200"}></div>
            </div>
            <div className={sectionInfoTextGroupStyles}>
                {props.localContent.text2.map((element, index) => {
                    return (<p className={"w-full text-center text-lg "} key={`${props.id}-text-${index}`}>
                        {element}
                    </p>);
                })}
            </div>
        </div>
    </section>);
}
/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function SectionData(props: BaseProps & SectionProps): ReactElement {
    return (<section id={props.id} className={props.className}>
        <h2 className={`${playwrite.className} text-2xl`}>{props.localContent.title}</h2>
        <div className={props.innerDispo}>
            <div className={"w-full flex flex-col items-center justify-center"}>
                {props.localContent.text.map((element, index) => {
                    return (<p className={"text-center text-lg "} key={`${props.id}-text-${index}`}>
                        {element}
                    </p>);
                })}
            </div>
            {props.separator &&
                <div className={"w-fit h-full flex items-center justify-center bg-[#fbfafc]"}>
                    <div className={"w-px h-full md:w-[2px] bg-slate-200"}></div>
                </div>
            }
            {props.children &&
                <div className={"w-full flex flex-col items-center justify-center"}>
                    {props.children}
                </div>
            }
        </div>
    </section>);
}
