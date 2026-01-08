/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file loading.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the page's skeleton.
 * Essentialy it is used to help user wait while data is still fetching.
 * It also shows the user that something is going.
*/

import type { ReactElement } from "react";

/**
 * The actual component to be rendered in the browser.
 *
 * - Note 01: it is part of Next.js' convention,
 * it has to be the default export of the file.
 * - Note 02: it is a Server Component thus need to be asynchronous.
 *
 * @returns a react element
*/
export default async function Loading({ params }: { "params": Promise<{ "lang": string }> }): Promise<ReactElement> {
    return (<></>);
}
