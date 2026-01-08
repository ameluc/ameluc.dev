/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file error.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the error page that should be displayed to the user.
 * Essentialy it should be used whenever the user request a page that I do not provide.
*/

"use client"

import type { ReactElement } from "react";

/**
 * The actual component to be rendered in the browser.
 *
 * - Note 01: it is part of Next.js' convention
 * and has to be the default export of the file.
 * - Note 02: it is a Client Component thus cannot be asynchronous.
 *
 * @returns a react element
*/
export default function Error({ params }: { params: Promise<{ lang: string }> }): ReactElement {
    return (<></>);
}
