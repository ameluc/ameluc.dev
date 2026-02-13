/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file adapter.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps, ContentLocalised } from "@/lib/ameluc";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CardStacker, CardSkewer } from "@/ui/components/cards";
import { Scroller } from "@/ui/components/scroller";
import { SectionInfo, SectionAnalyst, SectionDev, SectionContact } from "@/ui/components/sections";

gsap.registerPlugin(useGSAP);

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function AdapterDesktop(props: BaseProps & { localContent: ContentLocalised }): ReactElement {
    useGSAP(() => {
        gsap.from("#wrapper", {
            "y": 100,
            "opacity": 0.0,
            "duration": 2.5
        })
    });

    return (<Scroller>
        <div className={"rounded-b-4xl shadow-md bg-[#fbfafc] dark:bg-slate-800"}>
            {/* <section id={`main-info`} className={`w-full h-screen p-20  flex flex-col items-center justify-center gap-4`}>
                <Gallery id={``}
                    className={`w-full h-full rounded-[36px] flex flex-col items-center justify-center gap-4`}
                    localContent={props.localContent.main}
                />
            </section> */}
            <div className={"w-screen h-auto py-25 flex items-center justify-center bg-[#fbfafc] dark:bg-slate-800"}>
                <div className={"w-[60%] h-px md:h-[2px]"}></div>
            </div>
            <SectionInfo id={`personal-info`}
                className={`w-full h-auto px-2 md:px-10 flex flex-col items-center justify-center gap-15 bg-[#fbfafc] dark:bg-slate-800`}
                localContent={props.localContent.main.sectionAbout}>
            </SectionInfo>
            <div className={"w-screen h-auto py-25 flex items-center justify-center bg-[#fbfafc] dark:bg-slate-800"}>
                <div className={"w-[60%] h-px md:h-[2px] bg-slate-200"}></div>
            </div>
            <SectionAnalyst id={`data-analysis-diapo`}
                className={`w-full h-auto px-2 md:px-10 flex flex-col items-center justify-center gap-15 bg-[#fbfafc] dark:bg-slate-800`}
                localContent={props.localContent.main.sectionAnalyst}
                separator={true}
                innerDispo={"w-full md:w-[80%] flex flex-row gap-6"}>
                <CardStacker
                    className={"w-full h-auto flex flex-col gap-8"}
                    localContents={props.localContent.main.sectionAnalyst.worksDetails}
                    sharedInnerStyles={`w-fit h-auto rounded-4xl flex flex-col items-center justify-center overflow-hidden lg:scale-90 transition lg:delay-200 lg:duration-300 lg:ease-in-out hover:scale-100`}
                    sharedOuterStyles={``}
                    uniformImgSizes={{ "width": 320, "height": 320 }}
                />
            </SectionAnalyst>
            <div className={"w-screen h-auto py-25 flex items-center justify-center bg-[#fbfafc] dark:bg-slate-800"}>
                <div className={"w-[60%] h-px md:h-[2px] bg-slate-200"}></div>
            </div>
            <SectionDev id={`web-works-diapo`}
                className={`w-full h-auto px-2 md:px-10 flex flex-col items-center justify-center gap-4 bg-[#fbfafc] dark:bg-slate-800`}
                localContent={props.localContent.main.sectionDeveloper}
                innerDispo={"w-full md:w-[80%] h-auto flex flex-col items-center justify-center gap-8"}>
                <CardSkewer
                    className={"w-full flex flex-col items-center justify-center gap-10"}
                    localContents={props.localContent.main.sectionDeveloper.worksDetails1}
                    sharedStyles={`w-fit h-auto`}
                    uniformImgSizes={{ "width": 240, "height": 240 }}
                />
                <CardSkewer
                    className={"w-full flex flex-col items-center justify-center gap-10"}
                    localContents={props.localContent.main.sectionDeveloper.worksDetails2}
                    sharedStyles={`w-fit h-auto`}
                    uniformImgSizes={{ "width": 240, "height": 240 }}
                />
            </SectionDev>
            <div className={"w-screen h-auto py-25 flex items-center justify-center bg-[#fbfafc] dark:bg-slate-800"}>
                <div className={"w-[60%] h-px md:h-[2px] bg-slate-200"}></div>
            </div>
            <SectionContact id={`contact-info`}
                className={`w-full h-auto px-2 md:px-10 flex flex-col items-center justify-center gap-10 bg-[#fbfafc] dark:bg-slate-800`}
                localContent={props.localContent.main.sectionContact}>
                {/* innerDispo={"flex flex-row items-center justify-center gap-10"}
                    separator={true}>
                    <Messenger className={"flex flex-col gap-2"} localContent={props.localContent.main.sectionContact.messenger} /> */}
            </SectionContact>
            <div className={"w-screen h-auto py-25 flex items-center justify-center"}>
                <div className={"w-[60%] h-px md:h-[2px]"}></div>
            </div>

        </div>
        <div className={"w-screen h-[25vh] md:h-[20vh]"}></div>
    </Scroller>);
}
