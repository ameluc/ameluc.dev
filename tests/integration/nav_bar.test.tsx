/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file nav_bar.test.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains integration tests for the "nav_bar.tsx" file.
 *
 * @jest-environment jsdom
*/

import type { NavBarLocalised } from "@/lib/ameluc";
import { afterEach, describe, expect, it } from "@jest/globals";
import { cleanup, render, screen } from "@testing-library/react";
import { NavBar } from "@/ui/nav_bar";

describe(`01. tests for navigation bar component:`, () => {
    afterEach(() => {
        cleanup();
    });
    it(`it should load & display the navigation links to the user`, () => {
        const dummyLocalContent: NavBarLocalised = {
            waWorks: "My web apps works",
            daWorks: "My data analysis works",
            about: "Who I am",
            contact: "Get in touch"
        };

        render(<NavBar id={``} localContent={dummyLocalContent} />);
        expect(screen.getByText("My web apps works")).toBeInTheDocument();
        expect(screen.getByText("My data analysis works")).toBeInTheDocument();
        expect(screen.getByText("Who I am")).toBeInTheDocument();
        expect(screen.getByText("Get in touch")).toBeInTheDocument();
    });
});
