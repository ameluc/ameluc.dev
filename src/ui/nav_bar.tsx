/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file nav_bar.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the navigation bar component.
*/

"use-client"

import type { ReactElement } from "react";
import type { NavBarProps } from "@/lib/ameluc";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function NavBar({ className, localContent }: NavBarProps): ReactElement {
    return (<nav className={className}>
        <a href={`#intro`} aria-label={``}>{`Gallerie Améluc`}</a>
        <a href={`#web-apps-diapo`} aria-label={``}>{`${localContent.waWorks}`}</a>
        <a href={`#data-analysis-diapo`} aria-label={``}>{`${localContent.daWorks}`}</a>
        <a href={`#personal-info`} aria-label={``}>{`${localContent.about}`}</a>
        <a href={`#contact-info`} aria-label={``}>{`${localContent.contact}`}</a>
    </nav>);
}
