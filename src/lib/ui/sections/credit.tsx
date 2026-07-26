/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file credit.tsx
 * @version 0.3.0
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
import type { Credit } from "@/lib/ameluc";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Credit(props: Credit): ReactElement {
    const CC_Imgs = [
        {
            "src": "https://mirrors.creativecommons.org/presskit/icons/cc.svg",
            "alt": "",
            "style": {"maxWidth": "1em", "maxHeight": "1em", "marginLeft": "0.2em"}
        },
        {
            "src": "https://mirrors.creativecommons.org/presskit/icons/by.svg",
            "alt": "",
            "style": {"maxWidth": "1em", "maxHeight": "1em", "marginLeft": "0.2em"}
        },
        {
            "src": "https://mirrors.creativecommons.org/presskit/icons/nc.svg",
            "alt": "",
            "style": {"maxWidth": "1em", "maxHeight": "1em", "marginLeft": "0.2em"}
        },
        {
            "src": "https://mirrors.creativecommons.org/presskit/icons/nd.svg",
            "alt": "",
            "style": {"maxWidth": "1em", "maxHeight": "1em", "marginLeft": "0.2em"}
        },
    ];

    return (<div id={props.id} className={props.className}>
        <div className={`w-full flex flex-col md:flex-row items-center justify-center gap-1`}>
            <p>
                <a href={"https://www.ameluc.dev"}>Gallerie Améluc</a>
                {` ${props.content.licence.copyrightPart} `}
                <a href={"https://www.linkedin.com/in/ameluc/"} target={`_blank`}>Améluc Ahognidjè</a>
            </p>
            <p>
                {`${props.content.licence.licencePart}`}
            </p>
            <p className={"flex flex-row items-center gap-1"}>
                <a href={"https://creativecommons.org/licenses/by-nc-nd/4.0/"} target={`_blank`}>
                    CC BY-NC-ND 4.0
                </a>
                {CC_Imgs.map((image, index): ReactElement =>
                    (<img src={image.src} alt={image.src} style={image.style} key={`creative-commons-${index}`} />)
                )}
            </p>
        </div>
        <p>{props.content.credit}</p>
    </div>);
}
