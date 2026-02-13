/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file page.tsx
 * @version 0.5.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the actual page that will be rendered.
 * Essentialy this page serves as the landing page of the application.
*/

import type { ReactElement } from "react";
import type { ContentLocalised, Locals } from "@/lib/ameluc";
import { getLocalContent } from "@/lib/data";
import { CardSkewer, CardStacker } from "@/ui/components/cards";
import { Credit } from "@/ui/components/credit";
import { Gallery } from "@/ui/components/gallery";
import { Messenger } from "@/ui/components/input";
import { NavBar } from "@/ui/components/nav_bar";
import { Section, SectionData, SectionInfo } from "@/ui/components/sections";
import { Scroller } from "@/ui/components/scroller";
import { headerMainFooterStyles, navBarStyles } from "@/ui/styles";

/**
 * The actual component to be rendered in the browser.
 * - Note 01: it is part of Next.js' convention,
 * it has to be the default export of the file.
 * - Note 02: it is a Server Component thus need to be asynchronous.
 * @param params
 * @returns a react element
*/
export default async function Page(
    { params }: { "params": Promise<{ "lang": Locals }> }
): Promise<ReactElement> {
    const content: ContentLocalised = await getLocalContent((await params).lang);

    return (<>
        <header className={headerMainFooterStyles}>
            <NavBar id={`navigation-bar`} className={`${navBarStyles} text-white`} localContent={content.header.navBar} />
        </header>
        <main className={``}>
            {/* <Section id={`intro`}
                className={`fixed top-0 z-50 w-full h-screen flex flex-col items-center justify-center gap-4 bg-[#fbfafc]`}
                localContent={content.main.sectionIntro}
            /> */}
            <Scroller>
                {/* <section id={`main-info`} className={`w-full h-screen p-20  flex flex-col items-center justify-center gap-4`}>
                    <Gallery id={``}
                        className={`w-full h-full rounded-[36px] flex flex-col items-center justify-center gap-4`}
                        localContent={content.main}
                    />
                </section> */}
                <div className={"w-screen h-auto py-25 flex items-center justify-center bg-[#fbfafc]"}>
                    <div className={"w-[60%] h-px md:h-[2px]"}></div>
                </div>
                <SectionInfo id={`personal-info`}
                    className={`w-full h-auto px-2 md:px-10 flex flex-col items-center justify-center gap-15 bg-[#fbfafc]`}
                    localContent={content.main.sectionAbout}>
                </SectionInfo>
                <div className={"w-screen h-auto py-25 flex items-center justify-center bg-[#fbfafc]"}>
                    <div className={"w-[60%] h-px md:h-[2px] bg-slate-200"}></div>
                </div>
                <SectionData id={`data-analysis-diapo`}
                    className={`w-full h-auto px-2 md:px-10 flex flex-col items-center justify-center gap-15 bg-[#fbfafc]`}
                    localContent={content.main.sectionAnalyst}
                    separator={true}
                    innerDispo={"w-full md:w-[80%] flex flex-row gap-6"}>
                    <CardStacker
                        className={"w-full h-auto flex flex-col gap-8"}
                        localContents={content.main.sectionAnalyst.worksDetails}
                        sharedInnerStyles={`w-fit h-auto rounded-4xl flex flex-col items-center justify-center overflow-hidden lg:scale-90 transition lg:delay-200 lg:duration-300 lg:ease-in-out hover:scale-100 hover:shadow-md`}
                        sharedOuterStyles={``}
                        uniformImgSizes={{ "width": 320, "height": 320 }}
                    />
                </SectionData>
                <div className={"w-screen h-auto py-25 flex items-center justify-center bg-[#fbfafc]"}>
                    <div className={"w-[60%] h-px md:h-[2px] bg-slate-200"}></div>
                </div>
                <Section id={`web-works-diapo`}
                    className={`w-full h-auto px-2 md:px-10 flex flex-col items-center justify-center gap-4 bg-[#fbfafc]`}
                    localContent={content.main.sectionDeveloper}>
                    <CardSkewer
                        localContents={content.main.sectionDeveloper.worksDetails}
                        sharedStyles={`w-fit h-auto rounded-4xl flex flex-col md:grid md:grid-cols-2 items-center justify-center`}
                        uniformImgSizes={{ "width": 320, "height": 320 }}
                    />
                </Section>
                <div className={"w-screen h-auto py-25 flex items-center justify-center bg-[#fbfafc]"}>
                    <div className={"w-[60%] h-px md:h-[2px] bg-slate-200"}></div>
                </div>
                <Section id={`contact-info`}
                    className={`w-full h-screen px-2 md:px-10 rounded-b-4xl shadow flex flex-col items-center justify-center gap-10 bg-[#fbfafc]`}
                    localContent={content.main.sectionContact}
                    innerDispo={"flex flex-row items-center justify-center gap-10"}
                    separator={true}>
                    <Messenger className={"flex flex-col gap-2"} localContent={content.main.sectionContact.messenger} />
                </Section>
                <div className={"w-screen h-[25vh] md:h-[20vh]"}></div>
            </Scroller>
        </main>
        <footer className={`fixed top-0 -z-50 w-screen h-screen pb-10 bg-slate-400 text-gray-50 ${headerMainFooterStyles} justify-end`}>
            <Credit id={`credits-section`}
                className={`flex flex-col items-center justify-center gap-4`}
                localContent={content.footer}
            />
        </footer>
    </>);
}
