/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file page.tsx
 * @version 0.7.0
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
import { NavBar } from "@/ui/components/nav_bar";
import { SectionIntro } from "@/ui/components/sections";
import { StickyFooter } from "@/ui/components/sticky_footer";
import { AdapterDesktop } from "@/ui/section/adapter";
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
        <main>
            <SectionIntro
                className={`fixed top-0 z-50 w-full h-screen flex flex-col items-center justify-center gap-4 bg-[#fbfafc] dark:bg-slate-800`}
                localContent={content.main.sectionIntro} />
            <AdapterDesktop localContent={content} />
        </main>
        <footer>
            <StickyFooter
                className={`fixed top-0 -z-50 w-screen h-screen pb-10 bg-slate-400 text-gray-50 ${headerMainFooterStyles} justify-end`}
                localContent={content} />
        </footer>
    </>);
}
