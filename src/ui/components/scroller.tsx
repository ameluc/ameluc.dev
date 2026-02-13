/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file scroller.tsx
 * @version 0.2.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps } from "@/lib/ameluc";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import _ScrollSmoother, { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createContext, useContext, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

const SmootherContext = createContext<_ScrollSmoother | null>(null);

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function Scroller(props: BaseProps): ReactElement {
    const [scroller, setScroller] = useState<_ScrollSmoother | null>(null);

    useGSAP(() => {
        const smoother = ScrollSmoother.create({
            "content": "#content",
            "effects": true,
            // "ease": "back.out(1)",
            "smooth": 1.5,
            "wrapper": "#wrapper"
        });

        setScroller(smoother);
    });


    return (<div id={"wrapper"} className={props.className}>
        <div id={"content"}>
            <SmootherContext value={scroller}>
                {props.children}
            </SmootherContext>
        </div>
    </div>);
}

export function useSmoother() {
    return useContext(SmootherContext);
}
