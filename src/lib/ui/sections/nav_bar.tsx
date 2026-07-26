/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file nav_bar.tsx
 * @version 0.6.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the navigation bar component.
*/

"use client"

import type { ReactElement, RefObject } from "react";
import type { NavBar } from "@/lib/ameluc";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { icons } from "@/lib/ui/bases/icons";
import { Switch } from "@/lib/ui/bases/switch";
import { playwrite } from "@/lib/ui/fonts";
import { nBarStyles } from "@/lib/ui/styles";
import gsap from "@/lib/animation";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function NavBar(props: NavBar): ReactElement {
    const [ isChecked, setIsChecked ] = useState<boolean>(false);
    const [ isHovered, setIsHovered ] = useState<boolean>(true);
    const { theme, setTheme } = useTheme();
    const biFnBar: RefObject<null | HTMLElement> = useRef(null);
    const iconSize: number = 24;

    useEffect((): void => { setIsChecked(theme === "dark") }, []);

    const { contextSafe } = useGSAP((): void => {
        if (props.device === "desktop") {
            gsap.timeline()
            .from(biFnBar.current, {
                "duration": 0.5,
                "ease": "power4.inOut",
                "scaleX": 0.2,
                "opacity": 0.0
            }, "+=2.0")
            .from(".nav-bar-btns", {
                "duration": 0.5,
                "ease": "back.out(1.8)",
                "stagger": { "amount": 0.2, "from": "center" },
                "scale": 0.0
            }, "-=0.2")
            .to(".nav-bar-btns", {
                "duration": 0.3,
                "ease": "power4.in",
                "stagger": { "amount": 0.1, "from": "edges" },
                "scale": 0.0
            })
            .add((): void => {
                const state: Flip.FlipState = Flip.getState(biFnBar.current);

                flushSync((): void => {
                    setIsHovered(false);
                });
                Flip.from(state, {
                    "duration": 0.6,
                    "ease": "circ.out"
                })
                .from("#site-title", {
                    "duration": 0.5,
                    "ease": "power4.out",
                    "opacity": 0.0,
                    "scale": 0.3
                }, "-=0.3");
            });
        } else {
            gsap.timeline()
            .from(biFnBar.current, {
                "duration": 0.5,
                "ease": "power4.inOut",
                "scaleX": 0.2,
                "opacity": 0.0
            }, "+=2.0")
            .from(".nav-bar-btns", {
                "duration": 0.5,
                "ease": "back.out(1.8)",
                "stagger": { "amount": 0.2, "from": "center" },
                "scale": 0.0
            }, "-=0.2");
        }
    }, { "dependencies": [] });
    const handleHoverStart: () => void = contextSafe((): void => {
        const expandTL: gsap.core.Timeline = gsap.timeline();

        expandTL.to("#site-title", {
            "duration": 0.4,
            "ease": "power4.in",
            "autoAlpha": 0.0,
            "scale": 0.0
        })
        .add((): void => {
            const shrunkState: Flip.FlipState = Flip.getState(biFnBar.current);

            flushSync((): void => {
                setIsHovered(true);
            });
            Flip.from(shrunkState, {
                "duration": 0.6,
                "ease": "circ.out"
            })
            .from(".nav-bar-btns", {
                "duration": 0.3,
                "ease": "back.out(1.8)",
                "stagger": { "amount": 0.1, "from": "center"},
                "autoAlpha": 0.0,
                "scale": 0.1
            }, "-=0.2");
        });
    });
    const handleHoverEnd: () => void = contextSafe((): void => {
        const shrinkTL: gsap.core.Timeline = gsap.timeline();

        shrinkTL
        .to(".nav-bar-btns", {
            "duration": 0.5,
            "ease": "power4.in",
            "stagger": { "amount": 0.2, "from": "edges" },
            "autoAlpha": 0,
            "scale": 0.0,
        })
        .add((): void => {
            const expandedState: Flip.FlipState = Flip.getState(biFnBar.current);

            flushSync((): void => {
                setIsHovered(false);
            });
            Flip.from(expandedState, {
                "duration": 0.6,
                "ease": "circ.out",
            })
            .from("#site-title", {
            "duration": 0.5,
            "ease": "power4.out",
            "opacity": 0.0,
            "scale": 0.3
            }, "-=0.3");
        }, "-=0.1");
    });
    const barAspectT: ReactElement = (<nav
        id={`navigation-bar`}
        className={nBarStyles}
        ref={biFnBar}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}>
        <h1 id={`site-title`} className={`${playwrite.className}`}>
            {`Gallerie Améluc`}
        </h1>
    </nav>);
    const barAspectN: ReactElement = (<nav
        id={`navigation-bar`}
        className={nBarStyles}
        ref={biFnBar}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}>
        {Object.entries(props.content).slice(1).map(([key, value]): ReactElement =>
            (<a className={`nav-bar-btns relative w-6 h-6 flex items-center justify-center gap-2`}
                href={value.href}
                aria-label={value.text}
                target={"_blank"}
                key={key}>
                <Image
                    className={`object-contain`}
                    src={value.icon}
                    alt={value.text}
                    fill={true}
                    sizes={`24px`}
                />
            </a>)
        )}
        <a className={`nav-bar-btns`}
            href={`mailto:ameluc.ahognidje@protonmail.com`}
            aria-label={`contact_me`}>
            <icons.message
                id={`contact_me_icon`}
                width={iconSize}
                height={iconSize}
                color={"#ffffff"}
            />
        </a>
        <Switch
            className={`nav-bar-btns`}
            width={40}
            height={iconSize}
            isChecked={isChecked}
            onChange={(event): void => { setIsChecked(event.target.checked); }}
            onClick={(): void => { setTheme(theme === "dark" ? "light" : "dark"); }}
        />
    </nav>);

    return isHovered ? barAspectN : barAspectT;
}
