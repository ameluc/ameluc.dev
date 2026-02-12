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
import { createContext, useContext, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const SmootherContext = createContext<ScrollSmoother | null>(null);

export function useSmoother() {
    return useContext(SmootherContext);
}

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function Scroller(props: BaseProps): ReactElement {
    const [smoother, setSmoother] = useState<ScrollSmoother | null>(null);

    useGSAP(
        () => {
            const smoother = ScrollSmoother.create({
                "content": "#content",
                "effects": true,
                "ease": "back.out(1.5)",
                "smooth": 1.5,
                "wrapper": "#wrapper"
            });

            setSmoother(smoother);
        },
        {}
    );

    return (<SmootherContext value={smoother}>
        <div id={"wrapper"} className={props.className}>
            <div id={"content"}>
                {props.children}
            </div>
        </div>
    </SmootherContext>);
}
