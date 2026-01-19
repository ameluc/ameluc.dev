/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file icons.tsx
 * @version 0.1.0
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
export function ArrowUp({
    id,
    className,
    width=24,
    height=24,
    color="currentColor",
    ariaLabel
}: BaseProps & IconProps): ReactElement {

    return (<svg xmlns="http://www.w3.org/2000/svg"
        id={id}
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        aria-label={ariaLabel}>
        <path
            opacity="1"
            fill="none"
            stroke={color}
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
export function ArrowDown({
    id,
    className,
    width=24,
    height=24,
    color="currentColor",
    ariaLabel
}: BaseProps & IconProps): ReactElement {

    return (<svg xmlns="http://www.w3.org/2000/svg"
        id={id}
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        aria-label={ariaLabel}>
        <path
            opacity="1"
            fill="none"
            stroke={color}
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
export function Message({
    id,
    className,
    width=24,
    height=24,
    color="currentColor",
    ariaLabel
}: BaseProps & IconProps): ReactElement {

    return (<svg xmlns="http://www.w3.org/2000/svg"
        id={id}
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        aria-label={ariaLabel}>
        <path
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m 1.891522,5.391522 c 0,0 6.7389848,8.216956 10.108477,8.216956 3.369495,0 10.108479,-8.216956 10.108479,-8.216956"
        />
        <rect
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            width="23.243824"
            height="17.243824"
            x="0.378088"
            y="3.378088"
            ry="4.7899504"
        />
    </svg>);
}
