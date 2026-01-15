/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file section.tsx
 * @version 0.1.0
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

"use-client"

import type { ReactElement } from "react";
import type { SectionProps } from "@/lib/ameluc";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Section({ className, sectionId, localContent, children }: SectionProps): ReactElement {
    return (<section id={sectionId} className={className}>
        <h2>{localContent.title}</h2>
        <div>{localContent.text.map((element, index) => <p key={`${sectionId}-text-${index}`}>{element}</p>)}</div>
        {children && <div>{children}</div>}
    </section>);
}
