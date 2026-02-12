/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file switch.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the switch component.
*/

"use client"

import type { ReactElement } from "react";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Switch({ width, height }: { width: number, height: number }): ReactElement {
    return (<label className={`inline-flex items-center cursor-pointer`}>
        <div className={`isolate w-[40px] h-[24px] border-[1.5px] rounded-2xl border-white/50 overflow-hidden `}>
            <input className={`peer hidden`} type={`checkbox`} />
            <div className={`w-[200%] h-full rounded-[15px] bg-white shadow-[-8px_-4px_8px _0px _#ffffff,_8px_4px_12px_0px_#d1d9e6] translate-x-[-70%] transition-transform duration-500 cubic-bezier(0.85, 0.05, 0.18, 1.35) peer-checked:translate-x-[20%]`} />
        </div>
    </label>);
}
