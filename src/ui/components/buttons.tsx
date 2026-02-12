/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file button.tsx
 * @version 0.3.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the button component.
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps, ButtonProps, SwitchProps } from "@/lib/ameluc";
import { useState } from "react";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Button(props: BaseProps & ButtonProps): ReactElement {
    return (<button
            id={props.id}
            className={props.className}
            aria-label={props.ariaLabel}
            aria-disabled={props.ariaDisabled}
            onClick={props.onClick}
            formAction={props.formAction}
            type={props.type}
        >
        {props.children && props.children}
    </button>);
}
/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Switch(props: BaseProps & SwitchProps): ReactElement {
    const [ isActive, setIsActive ] = useState<boolean>(false);

    return (<button
            id={props.id}
            className={`w-10 h-6 border rounded-[20px] border-white p-[2px] flex flex-row items-center ${isActive ? "justify-end" : "justify-start"}`}
            aria-label={props.ariaLabel}
            onClick={props.onClick}
            type={props.type}
        >
        <div className={`w-[55%] h-full rounded-[50%] bg-white`} />
    </button>);
}
/**
 * A compound component of button components.
*/
export const buttons = {
    basic: Button,
    switch: Switch
}
