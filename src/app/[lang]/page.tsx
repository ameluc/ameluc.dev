/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file page.tsx
 * @version 0.1.0
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

    return (<>
        <header>
            <NavBar localContent={content.header.navBar} />
        </header>
        <main>
            <Section sectionId={`intro`} localContent={content.main.sectionIntro} />
            <Section sectionId={`web-apps-diapo`} localContent={content.main.sectionWA} />
            <Section sectionId={`data-analysis-diapo`} localContent={content.main.sectionDA} />
            <Section sectionId={`personal-info`} localContent={content.main.sectionAbout} />
            <Section sectionId={`contact-info`} localContent={content.main.sectionContact} />
        </main>
        <footer>
            <Credit localContent={content.footer} />
        </footer>
    </>);
}
