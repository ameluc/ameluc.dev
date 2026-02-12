/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file gallery.tsx
 * @version 0.1.1
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the gallery component.
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps, GalleryProps } from "@/lib/ameluc";
import { useState } from "react";
import { Frame } from "@/ui/components/frame";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Gallery(props: BaseProps & GalleryProps): ReactElement {
    const [ isActiveIntro, setIsActiveIntro ] = useState<boolean>(false);
    const [ isActiveWA, setIsActiveWA ] = useState<boolean>(false);
    const [ isActiveDA, setIsActiveDA ] = useState<boolean>(false);
    const initialState: boolean = !isActiveIntro && !isActiveDA && !isActiveWA;
    const introSize: string = initialState || isActiveIntro ? `w-full h-full` : `w-full h-fit`;
    const DASize: string = initialState || isActiveDA ? `w-full h-full` : isActiveIntro ? `w-full h-fit` : `w-[5%] h-full`;
    const WASize: string = initialState || isActiveWA ? `w-full h-full` : isActiveIntro ? `w-full h-fit` : `w-[5%] h-full`;
    const divSize: string = initialState || isActiveWA || isActiveDA ? `w-full h-full` : isActiveIntro ? `w-full h-fit` : `w-fit h-full`;
    const sharedStyles = `
        rounded-4xl
        p-2
        bg-white/30 dark:bg-black/30
        backdrop-blur-sm
        overflow-y-auto
        flex
        flex-col
        items-center
        justify-center
    `;

    return (<div id={props.id} className={props.className} aria-label={props.ariaLabel}>
        <Frame
            className={`${introSize} ${sharedStyles}`}
            id={`personal-info`}
            ariaLabel={`personal-info`}
            localContent={props.localContent.sectionAbout}
            onClick={
                () => {
                    setIsActiveIntro(prev => !prev);
                    setIsActiveWA(false);
                    setIsActiveDA(false);
                }
            }
            isActive={isActiveIntro}
        />
        <div className={`${divSize} flex flex-row items-center justify-center gap-4`}>
            <Frame
                className={`${DASize} ${sharedStyles}`}
                id={`data-analysis-diapo`}
                ariaLabel={`data-analysis-diapo`}
                localContent={props.localContent.sectionAnalyst}
                onClick={
                    () => {
                        setIsActiveDA(prev => !prev);
                        setIsActiveWA(false);
                        setIsActiveIntro(false);
                    }
                }
                isActive={isActiveDA}
            />
            <Frame
                className={`${WASize} ${sharedStyles}`}
                id={`web-works-diapo`}
                ariaLabel={`web-works-diapo`}
                localContent={props.localContent.sectionDeveloper}
                onClick={
                    () => {
                        setIsActiveWA(prev => !prev);
                        setIsActiveDA(false);
                        setIsActiveIntro(false);
                    }
                }
                isActive={isActiveWA}
            />
        </div>
    </div>);
}
