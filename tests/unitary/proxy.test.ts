/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file proxy.test.ts
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains unit tests for the "proxy.ts" file.
*/

import type { ArraySomeMocked, GetLocaleMocked, Locals, RedirectMocked } from "@/lib/ameluc";
import { afterEach, beforeEach, describe, expect, it, jest } from "@jest/globals";

describe(`test for proxy function`, () => {
    let getLocale: typeof import("@/lib/facilities").getLocale;
    let proxy: typeof import("@/proxy").proxy;
    let NextRequest: typeof import("next/server").NextRequest;
    let NextResponse: typeof import("next/server").NextResponse;
    const arraySomeMocked: ArraySomeMocked = jest.fn();
    const getLocaleMocked: GetLocaleMocked = jest.fn();
    const originalArraySome = Array.prototype.some;
    const redirectMocked: RedirectMocked = jest.fn();

    beforeEach(async () => {
        jest.resetModules();
        jest.clearAllMocks();
        jest.doMock("next/server", () => {
            return {
                NextRequest: class {
                    constructor(input: URL | RequestInfo, init?: RequestInit) {}
                    nextUrl = { "pathname": "/fr" }
                },
                NextResponse: class {
                    constructor(body?: BodyInit | null, init?: ResponseInit) {}
                    static redirect = redirectMocked
                }
            };
        });
        jest.mock("@/lib/facilities", () => {
            return { getLocale: getLocaleMocked };
        });
        jest.spyOn(Array.prototype, "some").mockImplementation(arraySomeMocked);

        ({ NextRequest, NextResponse } = await import("next/server"));
        ({ getLocale } = await import("@/lib/facilities"));
        ({ proxy } = await import("@/proxy"));
    });
    afterEach(() => {
        Array.prototype.some = originalArraySome;
    });
    it(`it should return nothing when pathname has locale`, () => {
        const dummyRequest = new NextRequest("localhost:3000");

        arraySomeMocked.mockReturnValue(true);

        proxy(dummyRequest);
        expect(getLocaleMocked).not.toHaveBeenCalled();
    });
    it(`it should redirect to the correct pathname`, () => {
        const dummyLocales: Array<Locals> = [ "en", "fr" ];
        const dummyRequest = new NextRequest("localhost:3000");
        const dummyReponse = new NextResponse();

        arraySomeMocked.mockReturnValue(false);
        getLocaleMocked.mockReturnValue("fr");
        redirectMocked.mockReturnValue(dummyReponse);

        const result = proxy(dummyRequest);

        expect(getLocaleMocked).toHaveBeenCalledWith(dummyRequest, dummyLocales);
        expect(redirectMocked).toHaveBeenCalledWith(dummyRequest.nextUrl);
        expect(result).toEqual(dummyReponse);
    });
});
