/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file page.tsx
 * @version 0.2.0
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
import { Credit } from "@/ui/credit";
import { Gallery } from "@/ui/gallery";
import { NavBar } from "@/ui/nav_bar";
import { Section } from "@/ui/section";

/**
 * The actual component to be rendered in the browser.
 *
 * - Note 01: it is part of Next.js' convention,
 * it has to be the default export of the file.
 * - Note 02: it is a Server Component thus need to be asynchronous.
 *
 * @returns a react element
*/
export default async function Page({ params }: { "params": Promise<{ "lang": Locals }> }): Promise<ReactElement> {
    const content: ContentLocalised = await getLocalContent((await params).lang);
    const sharedHeaderStyles: string = `z-50 w-fit h-fit rounded-[20px] px-10 py-3 bg-white/40 dark:bg-black/40 backdrop-blur-sm flex flex-row items-center justify-center gap-12`

    return (<>
        <header className={`w-screen h-fit flex flex-col items-center justify-center`}>
            <h1 className={`fixed top-[2%] ${sharedHeaderStyles}`}>{`Gallerie Améluc`}</h1>
            <NavBar id={`navigation-bar`} className={`fixed top-[92%] ${sharedHeaderStyles}`} localContent={content.header.navBar} />
        </header>
        <main className={`w-full h-fit flex flex-col items-center justify-center bg-black/10`}>
            {/* <Section id={`intro`} className={`fixed top-[50%] z-50`} localContent={content.main.sectionIntro} /> */}
            <section id={`main-info`} className={`w-full h-screen p-20  flex flex-col items-center justify-center gap-4`}>
                <Gallery
                    id={``}
                    className={`w-full h-full rounded-[36px] flex flex-col items-center justify-center gap-4`}
                    localContent={content.main}
                />
            </section>
            <Section
                id={`contact-info`}
                className={`w-full h-screen flex flex-col items-center justify-center gap-4`}
                localContent={content.main.sectionContact}
            />
        </main>
        <footer className={` bg-black/10`}>
            <Credit id={`credits-section`} className={`flex flex-col items-center justify-center gap-4`} localContent={content.footer} />
        </footer>
    </>);
}
