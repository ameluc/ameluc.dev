/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file ameluc.d.ts
 * @version 0.8.1
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains all the type used in the application.
*/

import type { HTMLInputTypeAttribute, Key, ReactNode, Ref } from "react";
import { jest } from "@jest/globals";
import { NextRequest, NextResponse } from "next/server";
import { importations } from "@/lib/data";

/**
 * The type for the locals the app supports.
*/
export type Locals = keyof typeof importations;
/**
 * The type of a section from the localised content.
*/
export type CardLocalised = typeof import("@/content/fr.json").main.sectionAnalyst.worksDetails;
/**
 * The type for the localised content.
*/
export type ContentLocalised = typeof import("@/content/fr.json");
/**
 * The type of the control bar from the localised content.
*/
export type ControlLocalised = typeof import("@/content/fr.json").header.controlBar;
/**
 * The type of the credits from the localised content.
*/
export type CreditLocalised = typeof import("@/content/fr.json").footer;
/**
 * The type of the gallery from the localised content.
*/
export type GalleryLocalised = typeof import("@/content/fr.json").main;
/**
 * The type of the navigation bar from the localised content.
*/
export type NavBarLocalised = typeof import("@/content/fr.json").header.navBar;
/**
 * The type of a section from the localised content.
*/
export type SectionLocalised = typeof import("@/content/fr.json").main.sectionIntro;

/**
 * The type for basics props all components should have.
*/
export type BaseProps = {
    "id"?: string,
    "className"?: string,
    "ariaLabel"?: string,
    "children"?: ReactNode
};
/**
 * The type for the button component.
*/
export type ButtonProps = {
    "type": "button" | "reset" | "submit",
    "onClick": MouseEventHandler<HTMLButtonElement>,
    "disabled": boolean,
    "text": string,
    "showChild": boolean,
    "showText": boolean,
    "ariaDisabled"?: boolean,
    "formAction"?: string | ((formData: FormData) => void | Promise<void>),
    "ref"?: Ref<HTMLButtonElement>
};
/**
 * The type for the props the card component.
*/
export type CardProps = {
    "imgAttr": {
        "src": string,
        "alt": string,
        "className"?: string,
        "width"?: number,
        "height"?: number
    },
    "workTitle": string,
    "info": Array<string>,
    "onClick"?: MouseEventHandler<HTMLElement> | undefined,
    "isActive"?: boolean
};
/**
 * The type for the props the card component.
*/
export type CardSkewerProps = {
    "sharedStyles": string,
    "localContents": CardLocalised,
    "uniformImgSizes": {
        "width": number,
        "height": number
    },
    "animationParams"?: {
        "triggerEl"?: {
            "start"?: string,
            "end"?: string
        },
        "triggerArea"?: {
            "start": {
                "el": "top" | "bottom" | "center" | `${number}px` |`${number}%`,
                "bg": "top" | "bottom" | "center" | `${number}px` |`${number}%`
            },
            "end": {
                "el": "top" | "bottom" | "center" | `${number}px` |`${number}%`,
                "bg": "top" | "bottom" | "center" | `${number}px` |`${number}%`
            }
        }
    }
};
/**
 * The type for the props the card component.
*/
export type CardStackerProps = {
    "sharedStyles": string,
    "localContents": CardLocalised,
    "uniformImgSizes": {
        "width": number,
        "height": number
    },
    "stackStart": number,
    "animationParams": {
        "scaleX": 0.05 | 0.1,
        "scrollTrigger": {
            "scrub": boolean | number,
            "triggerArea": {
                "start": {
                    "el": "top" | "bottom" | "center" | `${number}px` |`${number}%`,
                    "bg": "top" | "bottom" | "center" | `${number}px` |`${number}%`
                },
                "end"?: {
                    "el": "top" | "bottom" | "center" | `${number}px` |`${number}%`,
                    "bg": "top" | "bottom" | "center" | `${number}px` |`${number}%`
                }
            }
        }
    }
};
/**
 * The type for the props the control bar component.
*/
export type ControlBarProps = {
    "localContent": ControlLocalised
};
/**
 * The type for the props the credit component.
*/
export type CreditProps = {
    "localContent": CreditLocalised
};
/**
 * The type for the props the gallery component.
*/
export type GalleryProps = {
    "localContent": GalleryLocalised
};
/**
 * The type for the icon component's props.
*/
export type IconProps = {
    "width": number,
    "height": number,
    "color": string
};
/**
 * The type for the input component's props.
*/
export type InputProps = {
    "type": HTMLInputTypeAttribute,
    "name": string,
    "placeholder": string,
    "value": string | number | readonly Array<string>,
    "onChange": ChangeEventHandler<HTMLInputElement>,
    "required"?: boolean,
    "ref"?: Ref<HTMLInputElement>
};
/**
 * The type for the props the navigation bar component.
*/
export type NavBarProps = {
    "localContent": NavBarLocalised
};
/**
 * The type for the props the section component.
*/
export type SectionProps = {
    "localContent": SectionLocalised,
    "onClick"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseEnter"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseLeave"?: MouseEventHandler<HTMLElement> | undefined,
    "isActive"?: boolean
};
/**
 * The type for the switch component.
*/
export type SwitchProps = {
    "type": "button" | "reset" | "submit",
    "onClick"?: MouseEventHandler<HTMLButtonElement>,
};

/**
 * The type for the "some" method from
 * the "Array" class.
*/
export type ArraySomeMocked = jest.Mock<(
    predicate: (value: "en" | "fr", index: number, array: ("en" | "fr")[]) => unknown,
    thisArg?: any
) => boolean>;
/**
 * The type for the mocked version of the entries function from
 * the request headers.
*/
export type EntriesMocked = jest.Mock<() => Array<[string, string]>>;
/**
 * The type for the mocked version of the getLocals function from
 * the "proxy.ts" file.
*/
export type GetLocaleMocked = jest.Mock<(
    request: NextRequest,
    locales: Array<Locals>
) => string>;
/**
 * The type for the mocked version of the languages function from
 * the "negotiator" module.
*/
export type LanguagesMocked = jest.Mock<(
    availableLanguages?: Array<string>
) => Array<string>>;
/**
 * The type for the mocked version of the match function from
 * the "@formatjs/intl-localematcher" module.
*/
export type MatchMocked = jest.Mock<(
    requestedLocales: readonly Array<string>,
    availableLocales: readonly Array<string>,
    defaultLocale: string
) => string>;
/**
 * The type for the mocked version of the redirect method from
 * the "NextResponse" class.
*/
export type RedirectMocked = jest.Mock<(
    url: string | NextURL | URL,
    init?: number | ResponseInit
) => NextResponse<unknown>>;
