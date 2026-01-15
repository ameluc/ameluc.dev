/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file proxy.ts
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains facilities to handle connection requests.
*/

import type { Locals } from "@/lib/ameluc";
import { NextRequest, NextResponse } from "next/server";
import { getLocale } from "@/lib/facilities";

/**
 * This is the application's proxy that intercepts connection requests.
 * It allows to do some operations before responding.
 * Here it is only to redirect the user to the correct url.
 *
 * @returns an unknown NextResponse or nothing.
*/
export function proxy(request: NextRequest): void | NextResponse  {
    const locales: Array<Locals> = [ "en", "fr" ];
    const { pathname } = request.nextUrl;
    const pathnameHasLocal: boolean = locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    if (pathnameHasLocal) return;

    const locale: string = getLocale(request, locales);
    const hasPathnameOnlyLocal: boolean = /^\/[a-z][a-z]$/.test(pathname);

    if(hasPathnameOnlyLocal) request.nextUrl.pathname = `/${locale}`;
    else request.nextUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}
/**
 * A configuration that is picked up by Next.js.
*/
export const config = {
    "matcher": [
        // Skip all internal files
        "/((?!_next).*)"
    ]
};
