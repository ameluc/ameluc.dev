/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file credit.test.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains integration tests for the "credit.tsx" file.
 *
 * @jest-environment jsdom
*/

import type { CreditLocalised } from "@/lib/ameluc";
import { afterEach, describe, expect, it } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import { Credit } from "@/ui/credit";

describe(`01. tests for credit component:`, () => {
    afterEach(() => {
        cleanup();
    });
    it(`it should load & display the correct content to the user`, () => {
        const dummyLocalContent: CreditLocalised = {
            credit: "my website",
            licence: { copyrightPart: "some copyright on my website", licencePart: "some licence" }
        }
        render(<Credit id={``} localContent={dummyLocalContent} />);
        expect(screen.getByText(dummyLocalContent.credit)).toBeInTheDocument();
        expect(screen.getByText(dummyLocalContent.licence.copyrightPart)).toBeInTheDocument();
        expect(screen.getByText(dummyLocalContent.licence.licencePart)).toBeInTheDocument();
    });
});
