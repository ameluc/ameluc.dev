/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file theme_adapter.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
*/

"use client"

import type { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

/**
 * The actual component that will be used elegantely.
 * @returns a react element.
*/
export function ThemeAdapter(props: { "children": ReactNode }): ReactElement {
    return(<ThemeProvider
        attribute={`class`}
        defaultTheme={`system`}
        enableSystem={true}>
            {props.children}
    </ThemeProvider>);
}
