/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file image.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains a
*/

"use client"

import type { IKImageProps } from "@imagekit/next";
import type { ReactElement } from "react";
import { Image } from "@imagekit/next";

/**
 * An image component based on ImageKit's
 * @returns a react element.
*/
export function ImgOptimiser(props: Omit<IKImageProps, "urlEndpoint" | "loading">): ReactElement {
    const IK_URL_ENDPOINT: undefined | string = process.env.NEXT_PUBLIC_IK_URL_ENDPOINT;

    if (!IK_URL_ENDPOINT) throw new Error("Missing ImageKit url endpoint");

    return (<Image urlEndpoint={IK_URL_ENDPOINT} loading={`lazy`} {...props} />);
}
