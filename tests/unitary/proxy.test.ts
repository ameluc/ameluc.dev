/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file proxy.test.ts
 * @version 0.1.1
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains unit tests for the "proxy.ts" file.
*/

import type { GetLocaleMocked, Locals, RedirectMocked } from "@/lib/ameluc";
import { beforeEach, describe, expect, it, jest } from "@jest/globals";

describe(`01. tests for proxy function:`, () => {
    let getLocale: typeof import("@/lib/facilities").getLocale;
    let proxy: typeof import("@/proxy").proxy;
    let NextRequest: typeof import("next/server").NextRequest;
    let NextResponse: typeof import("next/server").NextResponse;
    const getLocaleMocked: GetLocaleMocked = jest.fn();
    const redirectMocked: RedirectMocked = jest.fn();

    beforeEach(async () => {
        jest.resetModules();
        jest.clearAllMocks();
        jest.doMock("next/server", () => {
            return {
                NextRequest: class {
                    constructor(input: URL | RequestInfo, init?: RequestInit) {}
                    nextUrl = { pathname: "" }
                },
                NextResponse: class {
                    constructor(body?: BodyInit | null, init?: ResponseInit) {}
                    static redirect = redirectMocked
                }
            };
        });
        jest.doMock("@/lib/facilities", () => {
            return { getLocale: getLocaleMocked };
        });

        ({ NextRequest, NextResponse } = await import("next/server"));
        ({ getLocale } = await import("@/lib/facilities"));
        ({ proxy } = await import("@/proxy"));
    });
    it(`it should return nothing when pathname has locale`, () => {
        const dummyRequest = new NextRequest("localhost:3000");

        dummyRequest.nextUrl.pathname = "/fr";

        proxy(dummyRequest);
        expect(getLocaleMocked).not.toHaveBeenCalled();
    });
    it(`it should redirect to the correct pathname`, () => {
        const dummyLocales: Array<Locals> = [ "en", "fr" ];
        const dummyRequest = new NextRequest("localhost:3000");
        const dummyReponse = new NextResponse();

        dummyRequest.nextUrl.pathname = "/de";

        getLocaleMocked.mockReturnValue("fr");
        redirectMocked.mockReturnValue(dummyReponse);

        const result = proxy(dummyRequest);

        expect(getLocaleMocked).toHaveBeenCalledWith(dummyRequest, dummyLocales);
        expect(dummyRequest.nextUrl.pathname).toBe("/fr");
        expect(redirectMocked).toHaveBeenCalledWith(dummyRequest.nextUrl);
        expect(result).toEqual(dummyReponse);
    });
});
