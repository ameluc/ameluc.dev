/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file scroller.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 *
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps } from "@/lib/ameluc";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Scroller({ children }: BaseProps): ReactElement {
    useGSAP(
        () => {
            const smoother = ScrollSmoother.create({
                "content": "#content",
                "effects": true,
                "ease": "back.out(1.5)",
                "smooth": 1.5,
                "wrapper": "#wrapper"
            });
        },
        {}
    );

    return (<div id={"wrapper"}>
        <div id={"content"}>
            {children}
        </div>
    </div>);
}
