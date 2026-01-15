/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file facilities.test.ts
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains unit tests for the "facilities.ts" file.
*/

import type Negotiator from "negotiator";
import type { EntriesMocked, LanguagesMocked, Locals, MatchMocked } from "@/lib/ameluc";
import { beforeEach, describe, expect, it, jest } from "@jest/globals";

describe(`test for facilities functions 01: "getLocale"`, () => {
    let getLocale: typeof import("@/lib/facilities").getLocale;
    let match: typeof import("@formatjs/intl-localematcher").match;
    let Negotiator: typeof import("negotiator");
    let NextRequest: typeof import("next/server").NextRequest;
    let NextResponse: typeof import("next/server").NextResponse;
    const defaultLocale: string = "en";
    const entriesMocked: EntriesMocked = jest.fn();
    const languagesMocked: LanguagesMocked = jest.fn();
    const locales: Array<Locals> = [ "en", "fr" ];
    const matchMocked: MatchMocked = jest.fn();

    function simulateRequest(entriesMockedReturn: Array<[string, string]>, languagesMockedReturn: Array<string>, matchMockedReturn: string): typeof NextRequest.prototype {
        entriesMocked.mockReturnValue(entriesMockedReturn);
        languagesMocked.mockReturnValue(languagesMockedReturn);
        matchMocked.mockReturnValue(matchMockedReturn);

        return new NextRequest("localhost:3000");
    }

    beforeEach(async () => {
        jest.resetModules();
        jest.clearAllMocks();
        jest.doMock("@formatjs/intl-localematcher", () => {
            return { "match": matchMocked };
        });
        jest.doMock("negotiator", () => {
            return {
                __esModule: true,
                "default": class {
                    constructor(req: { headers: Negotiator.Headers }) {}
                    languages = languagesMocked
                }
            };
        });
        jest.doMock("next/server", () => {
            return {
                "NextRequest": class {
                    constructor(input: URL | RequestInfo, init?: RequestInit) {}
                    headers = { entries: entriesMocked }
                },
                "NextResponse": {}
            };
        });

        ({ match } = await import("@formatjs/intl-localematcher"));
        (Negotiator = (await import("negotiator")).default);
        ({ NextRequest, NextResponse } = await import("next/server"));
        ({ getLocale } = await import("@/lib/facilities"));
    });
    it(`it should return a string representing the en local`, () => {
        const dummyRequest = simulateRequest([[ "accept-language", "en,fr;q=0.9"]], [ "en", "fr" ], "en");
        const result: string = getLocale(dummyRequest, locales);

        expect(matchMocked).toHaveBeenCalledWith([ "en", "fr" ], locales, defaultLocale);
        expect(result).toBe("en");
    });
    it(`it should return a string representing the fr local`, () => {
        const dummyRequest = simulateRequest([[ "accept-language", "fr,en;q=0.9"]], [ "fr", "en" ], "fr");
        const result: string = getLocale(dummyRequest, locales);

        expect(matchMocked).toHaveBeenCalledWith([ "fr", "en" ], locales, defaultLocale);
        expect(result).toBe("fr");
    });
    it(`it should return a string representing a default local`, () => {
        const dummyRequest = simulateRequest([[ "accept-language", "de,nl;q=0.9"]], [ "de", "nl" ], "en");
        const result: string = getLocale(dummyRequest, locales);

        expect(matchMocked).toHaveBeenCalledWith([ "de", "nl" ], locales, defaultLocale);
        expect(result).toBe("en");
    });
});
