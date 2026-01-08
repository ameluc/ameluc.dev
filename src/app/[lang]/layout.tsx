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
import type { ReactElement, ReactNode } from "react";

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
export default async function RootLayout({ children, params }: Readonly<{ "children": ReactNode, "params": Promise<{ "lang": "en" | "fr" }> }>): Promise<ReactElement> {
    return (<></>);
}
