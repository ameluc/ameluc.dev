/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file credit.tsx
 * @version 0.2.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the credit component.
*/

"use client"

import type { ReactElement } from "react";
import type { BaseProps, CreditProps } from "@/lib/ameluc";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Credit({ id, className, localContent }: BaseProps & CreditProps): ReactElement {
    return (<div id={id} className={className}>
        <div className={`flex flex-row items-center justify-center gap-1`}>
            <a href="https://www.ameluc.dev">Gallerie Améluc</a>
            <p>{` ${localContent.licence.copyrightPart} `}</p>
            <a href="https://www.linkedin.com/in/ameluc/">Améluc Ahognidjè</a>
            <p>{` ${localContent.licence.licencePart} `}</p>
            <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>
            <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style={{"maxWidth": "1em", "maxHeight": "1em", "marginLeft": ".2em"}} />
            <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style={{"maxWidth": "1em", "maxHeight": "1em", "marginLeft": ".2em"}} />
            <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style={{"maxWidth": "1em", "maxHeight": "1em", "marginLeft": ".2em"}} />
            <img src="https://mirrors.creativecommons.org/presskit/icons/nd.svg" alt="" style={{"maxWidth": "1em", "maxHeight": "1em", "marginLeft": ".2em"}} />
        </div>
        <p>{localContent.credit}</p>
    </div>);
}
