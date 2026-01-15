/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file ameluc.d.ts
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains all the type used in the application.
*/

import { NextRequest, NextResponse } from "next/server";
import type { ReactNode } from "react";
import { jest } from "@jest/globals";
import { importations } from "@/lib/data";

/**
 * The type for the "some" method from
 * the "Array" class.
*/
export type ArraySomeMocked = jest.Mock<(predicate: (value: "en" | "fr", index: number, array: ("en" | "fr")[]) => unknown, thisArg?: any) => boolean>;
/**
 * The type for the localised content.
*/
export type ContentLocalised = typeof import("@/content/fr.json");
/**
 * The type of the credits from the localised content.
*/
export type CreditLocalised = typeof import("@/content/fr.json").footer;
/**
 * The type for the props the credit component.
*/
export type CreditProps = {
    className?: string,
    localContent: CreditLocalised,
    children?: ReactNode
};
/**
 * The type for the mocked version of the entries function from
 * the request headers.
*/
export type EntriesMocked = jest.Mock<() => Array<[string, string]>>;
/**
 * The type for the mocked version of the getLocals function from
 * the "proxy.ts" file.
*/
export type GetLocaleMocked = jest.Mock<(request: NextRequest, locales: Array<Locals>) => string>;
/**
 * The type for the mocked version of the languages function from
 * the "negotiator" module.
*/
export type LanguagesMocked = jest.Mock<(availableLanguages?: string[]) => Array<string>>;
/**
 * The type for the locals the app supports.
*/
export type Locals = keyof typeof importations;
/**
 * The type for the mocked version of the match function from
 * the "@formatjs/intl-localematcher" module.
*/
export type MatchMocked = jest.Mock<(
    requestedLocales: readonly string[],
    availableLocales: readonly string[],
    defaultLocale: string
) => string>;
/**
 * The type of the navigation bar from the localised content.
*/
export type NavBarLocalised = typeof import("@/content/fr.json").header.navBar;
/**
 * The type for the props the navigation bar component.
*/
export type NavBarProps = {
    className?: string,
    localContent: NavBarLocalised
};
/**
 * The type for the mocked version of the redirect method from
 * the "NextResponse" class.
*/
export type RedirectMocked = jest.Mock<(
    url: string | NextURL | URL,
    init?: number | ResponseInit
) => NextResponse<unknown>>;
/**
 * The type of a section from the localised content.
*/
export type SectionLocalised = typeof import("@/content/fr.json").main.sectionIntro;
/**
 * The type for the props the section component.
*/
export type SectionProps = {
    className?: string,
    sectionId: string,
    localContent: SectionLocalised,
    children?: ReactNode
};
