/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file icons.tsx
 * @version 0.2.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the icon components.
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps, IconProps } from "@/lib/ameluc";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
function ArrowUp(props: BaseProps & IconProps): ReactElement {
    return (<svg xmlns="http://www.w3.org/2000/svg"
        id={props.id}
        className={props.className}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        aria-label={props.ariaLabel}>
        <path
            opacity="1"
            fill="none"
            stroke={props.color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 0.47049205,17.529508 c 0,0 7.68633785,-11.059016 11.52950795,-11.059016 3.843169,0 11.529508,11.059016 11.529508,11.059016"
        />
    </svg>);
}
/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
function ArrowDown(props: BaseProps & IconProps): ReactElement {
    return (<svg xmlns="http://www.w3.org/2000/svg"
        id={props.id}
        className={props.className}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        aria-label={props.ariaLabel}>
        <path
            opacity="1"
            fill="none"
            stroke={props.color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 0.47049201,6.470492 c 0,0 7.68633869,11.059017 11.52950799,11.059017 3.843169,0 11.529508,-11.059017 11.529508,-11.059017"
        />
    </svg>);
}
/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
function Message(props: BaseProps & IconProps): ReactElement {
    return (<svg xmlns="http://www.w3.org/2000/svg"
        id={props.id}
        className={props.className}
        width={props.width}
        height={props.height}
        viewBox="0 0 24 24"
        aria-label={props.ariaLabel}>
        <path
            fill="none"
            stroke={props.color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 1.891522,5.391522 c 0,0 6.7389848,8.216956 10.108477,8.216956 3.369495,0 10.108479,-8.216956 10.108479,-8.216956"
        />
        <rect
            fill="none"
            stroke={props.color}
            strokeWidth="1.5"
            width="23.243824"
            height="17.243824"
            x="0.378088"
            y="3.378088"
            ry="4.7899504"
        />
    </svg>);
}
/**
 * A compound component of icons components.
*/
export const icons = {
    arrowDown: ArrowDown,
    arrowUp: ArrowUp,
    message: Message
};
