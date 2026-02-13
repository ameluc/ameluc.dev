/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file sticky_footer.tsx
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

"use client"

import type { ReactElement } from "react";
import type { BaseProps, ContentLocalised } from "@/lib/ameluc";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Credit } from "./credit";

gsap.registerPlugin(useGSAP);

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function StickyFooter(props: BaseProps& {localContent: ContentLocalised}): ReactElement {
    useGSAP(() => {
        gsap.from("#sticky-footer", {
            "display": "none",
            "opacity": 0.0,
            "delay": 2.5,
            "duration": 1.5
        })
    });

    return (<div id={"sticky-footer"} className={props.className}>
        <Credit id={`credits-section`}
            className={`flex flex-col items-center justify-center gap-4`}
            localContent={props.localContent.footer}
        />
    </div>);
}
