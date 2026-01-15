/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file facilities.ts
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains facilities to help in some of the app's logic.
*/

import type { Locals } from "@/lib/ameluc";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

/**
 * This is a helper funtion to get the preferred languages of the user from the request headers.
 *
 * @returns a string representing a local
*/
export function getLocale(request: NextRequest, locales: Array<Locals>): string {
    const headers: Record<string, string> = Object.fromEntries(request.headers.entries());
    const languages: Array<string> = new Negotiator({ headers }).languages();
    const defaultLocale: string = "en";

    return match(languages, locales, defaultLocale);
}
