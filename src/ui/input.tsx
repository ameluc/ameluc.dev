/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file input.tsx
 * @version 0.2.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the input component.
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps, InputProps } from "@/lib/ameluc";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Input(props: BaseProps & InputProps): ReactElement {
    return (<input
        id={props.id}
        className={props.className}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        ref={props.ref}
        required={props.required}
    />);
}
