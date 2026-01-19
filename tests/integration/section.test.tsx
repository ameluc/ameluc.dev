/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file section.test.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains integration tests for the "section.tsx" file.
 *
 * @jest-environment jsdom
*/

import type { SectionLocalised } from "@/lib/ameluc";
import { afterEach, describe, expect, it } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import { Section } from "@/ui/section";

describe(`01. tests for section component:`, () => {
    afterEach(() => {
        cleanup();
    });
    it(`it should load & display the correct section content to the user`, () => {
        const dummyLocalContent: SectionLocalised = {
            title: "my website",
            text: [ "some text on my website" ]
        }
        render(<Section id={``} localContent={dummyLocalContent} />);
        expect(screen.getByText(dummyLocalContent.title)).toBeInTheDocument();
        expect(screen.getByText(dummyLocalContent.text[0])).toBeInTheDocument();
    });
});
