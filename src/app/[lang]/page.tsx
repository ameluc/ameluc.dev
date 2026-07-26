/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file page.tsx
 * @version 0.8.0
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
import type { ContentLocalised, Device, ParamsType } from "@/lib/ameluc";
import { headers } from "next/headers";
import { DesktopAdapter } from "@/lib/ui/portals/desktop_adapter";
import { NavBar } from "@/lib/ui/sections/nav_bar";
import { SectionIntro } from "@/lib/ui/sections/sec_intro";
import { getLocalContent } from "@/lib/data";
import { getDevice } from "@/lib/facilities";

/**
 * The actual component to be rendered in the browser.
 * - Note 01: it is part of Next.js' convention,
 * it has to be the default export of the file.
 * - Note 02: it is a Server Component thus need to be asynchronous.
 * @param params
 * @returns a react element
*/
export default async function Page(props: ParamsType): Promise<ReactElement> {
    const userAgent: string | null = (await headers()).get("user-agent");
    const device: Device = getDevice(userAgent!);
    const content: ContentLocalised = await getLocalContent((await props.params).lang);

    return (<>
        <header className={`fixed top-[2%] z-50 w-screen`}>
            <NavBar content={content.header.navBar} device={device} />
        </header>
        <main>
            <SectionIntro content={content.main.sectionIntro} device={device} />
            <DesktopAdapter content={content} device={device} />
        </main>
        <footer>
        </footer>
    </>);
}
