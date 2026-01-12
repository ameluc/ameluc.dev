/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file layout.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the root layout of the application.
 * Essentially it is a layout that will be shared by every pages
 * that the user can access.
*/

import "./global.css";
import type { Metadata, ResolvingMetadata } from "next";
import type { ReactElement, ReactNode } from "react";
import type { LocalContent, LocalSupported } from "@/lib/ameluc";
import { getLocalContent } from "@/lib/data";

/**
 * This function comes from Next.js' conventions to define dynamic metadata on the fly.
 * It needs to be exported so Next.js can see it and can only work inside a server component.
 *
 * @returns a metadata object
*/
export async function generateMetadata({ params }: { "params": Promise<LocalSupported> }, parent: ResolvingMetadata): Promise<Metadata> {
    const content: LocalContent = await getLocalContent((await params).lang);

    return {
        "title": content.title,
        "description": content.description
    };
}
/**
 * This functions comes from Next.js' conventions to work sometimes with dynamic route segments.
 * As the name suggests, it defines statical parameters for such routes.
 * All at build time instead of on-demand at request time which can improve the initial load time.
 * It needs to be imported from the file for Next.js to see it.
 *
 * @returns an array of the routes parameters
*/
export async function generateStaticParams(): Promise<Array<LocalSupported>> {
    return [{ "lang": "en" }, { "lang": "fr" }];
}
/**
 * The actual component to be rendered in the browser.
 *
 * - Note 01: it is part of Next.js' convention,
 * it has to be the default export of the file
 * and also named RootLayout.
 * - Note 02: it is a Server Component thus need to be asynchronous.
 *
 * @returns a react element
*/
export default async function RootLayout({ children, params }: Readonly<{ "children": ReactNode, "params": Promise<LocalSupported> }>): Promise<ReactElement> {
    return (<html lang={(await params).lang}>
        <body>
            {children}
        </body>
    </html>);
}
