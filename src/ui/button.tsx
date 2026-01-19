/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file button.tsx
 * @version 0.1.0
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
import type { BaseProps, ButtonProps } from "@/lib/ameluc";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Button({
    id,
    className,
    ariaLabel,
    ariaDisabled,
    onClick,
    formAction,
    type,
    children,
    text,
    showChild,
    showText
}: BaseProps & ButtonProps): ReactElement {
    return (<button
            id={id}
            className={className}
            aria-label={ariaLabel}
            aria-disabled={ariaDisabled}
            onClick={onClick}
            formAction={formAction}
            type={type}
        >
        {showChild && children}
        {showText && text}
    </button>);
}
