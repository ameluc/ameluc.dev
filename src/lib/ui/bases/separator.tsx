/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file separator.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps } from "@/lib/ameluc";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function Spacer(props: BaseProps & {"showLine": boolean, "spacing"?: number }): ReactElement {
    return (<div className={`w-screen h-auto py-25 flex items-center justify-center`}>
        {
            props.showLine ?
            <div className={`w-[60%] h-px bg-slate-200`} /> :
            <div className={`w-[60%] h-px`} />
        }
    </div>);
}
