/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file ameluc.d.ts
 * @version 2.0.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains all the type used in the application.
*/

import type { jest } from "@jest/globals";
import type { NextRequest, NextResponse } from "next/server";
import type { ChangeEventHandler, CSSProperties, HTMLInputTypeAttribute, Key, MouseEventHandler, ReactNode, Ref } from "react";
import type { importations } from "@/lib/data";

/**
 * The type for the device.
*/
export type Device = "desktop" | "mobile" | "tablet";
/**
 * The type for the locals the app supports.
*/
export type Locals = keyof typeof importations;
/**
 * The type of a section from the localised content.
*/
export type CardLocalisedSelf = typeof import("@/lib/content/fr.json").main.sectionAbout.selfDetails;
/**
 * The type of a section from the localised content.
*/
export type CardLocalisedAnalyst = typeof import("@/lib/content/fr.json").main.sectionAnalyst.worksDetails;
/**
 * The type of a section from the localised content.
*/
export type CardLocalisedDeveloper = typeof import("@/lib/content/fr.json").main.sectionDeveloper.worksDetails1;
/**
 * The type for the localised content.
*/
export type ContentLocalised = typeof import("@/lib/content/fr.json");
/**
 * The type of the control bar from the localised content.
*/
export type ControlLocalised = typeof import("@/lib/content/fr.json").header.controlBar;
/**
 * The type of the credits from the localised content.
*/
export type CreditLocalised = typeof import("@/lib/content/fr.json").footer;
/**
 * The type of the gallery from the localised content.
*/
export type GalleryLocalised = typeof import("@/lib/content/fr.json").main;
/**
 * The type of the messenger from the localised content.
*/
export type MessengerLocalised = typeof import("@/lib/content/fr.json").main.sectionContact.messenger;
/**
 * The type of the navigation bar from the localised content.
*/
export type NavBarLocalised = typeof import("@/lib/content/fr.json").header.navBar;
/**
 * The type of a section from the localised content.
*/
export type SecIntroLocalised = typeof import("@/lib/content/fr.json").main.sectionIntro;
/**
 * The type of a section from the localised content.
*/
export type SecInfoLocalised = typeof import("@/lib/content/fr.json").main.sectionAbout;
/**
 * The type of a section from the localised content.
*/
export type SecAnalystLocalised = typeof import("@/lib/content/fr.json").main.sectionAnalyst;
/**
 * The type of a section from the localised content.
*/
export type SecDevLocalised = typeof import("@/lib/content/fr.json").main.sectionDeveloper;
/**
 * The type of a section from the localised content.
*/
export type SecContactLocalised = typeof import("@/lib/content/fr.json").main.sectionContact;
/**
 * The type for basics props all components should have.
*/
export type BaseProps = {
    "device": Device,
    "ariaLabel"?: string,
    "children"?: ReactNode,
    "className"?: string,
    "id"?: string,
    "style"?: CSSProperties
};
/**
 * The type for the button component.
*/
export type Button = BaseProps & HTMLButtonElement /* {
    "onClick": MouseEventHandler<>,
    "text": string,
    "type": "button" | "reset" | "submit",
    "ariaDisabled"?: boolean,
    "disabled"?: boolean,
    "formAction"?: string | ((formData: FormData) => void | Promise<void>),
    "ref"?: Ref<HTMLButtonElement> */
// };
/**
 * The type for the props the card component.
*/
export type Card = Omit<BaseProps, "device"> & {
    "card": CardData,
    "imgAttr": {
        "aspect": "object-contain" | "object-cover",
        "sizes"?: string,
        "className"?: string,
        "width"?: number,
        "height"?: number
    },
    "onClick"?: undefined | MouseEventHandler<HTMLElement>,
    "isActive"?: boolean,
    "dSpeed"?: number
};
/** */
export type CardData = typeof import("@/lib/content/fr.json").main.sectionAnalyst.worksDetails[0];
/**
 * The type for the props the card component.
*/
export type Texts = BaseProps & {
    "content": Array<string>,
    "alignment": string,
    "size": string
};
/**
 * The type for the props the card component.
*/
export type CardSlider = BaseProps & {
    "content": CardLocalisedAnalyst,
    "sharedInnerStyles"?: string,
    "sharedOuterStyles"?: string,
    "uniformImgSizes"?: {
        "width": number,
        "height": number
    },
    "setCardActive": (cardId: string) => void,
    "onCardClick": (card: CardData) => void,
    "openViewer": (state: boolean) => void,
    "animParams"?: {
        "scale": 0.05 | 0.1 | 0.15 | 0.20,
        "scrollTrigger"?: {
            "scrub": boolean | number,
            "triggerArea"?: {
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
 * The type for the props the card component.
*/
export type CardSkewer = BaseProps & {
    "content": CardLocalisedDeveloper,
    // "sharedStyles": string,
    "uniformImgSizes"?: {
        "width": number,
        "height": number
    },
    "setCardActive": (cardId: string) => void,
    "onCardClick": (card: CardData) => void,
    "openViewer": (state: boolean) => void,
    "dSpeedGap": number,
    "dSpeedEnd": number,
    "animParams"?: {
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
export type CardStacker = BaseProps & {
    "content": CardLocalisedSelf,
    "sharedStyles"?: string,
    "stackStart"?: number,
    "uniformImgSizes": {
        "width": number,
        "height": number
    },
    "animParams": {
        "scale": 0.01 | 0.05 | 0.1 | 0.15 | 0.20,
        "scrollTrigger"?: {
            "scrub": boolean | number,
            "triggerArea"?: {
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
export type ControlBar = BaseProps & {
    "localContent": ControlLocalised
};
/**
 * The type for the props the credit component.
*/
export type Credit = BaseProps & {
    "content": CreditLocalised
};
/**
 * The type for the props the gallery component.
*/
export type Gallery = BaseProps & {
    "localContent": GalleryLocalised
};
/**
 * The type for the icon component's props.
*/
export type Icons =  Omit<BaseProps, "device"> & {
    "color": string,
    "height": number,
    "width": number
};
/**
 * The type for the input component's props.
*/
export type InputField = BaseProps & {
    "onChange": ChangeEventHandler<HTMLInputElement>,
    "name": string,
    "placeholder": string,
    "type": HTMLInputTypeAttribute,
    "value": string | number | readonly Array<string>,
    "ref"?: Ref<HTMLInputElement>,
    "required"?: boolean
};
/**
 * The type for the props the control bar component.
*/
export type Messenger = BaseProps & {
    "content": MessengerLocalised
};
/**
 * The type for the props the navigation bar component.
*/
export type NavBar = BaseProps & {
    "content": NavBarLocalised
};
/**
 * The type for the props the section component.
*/
export type SecIntro = BaseProps & {
    "content": SecIntroLocalised,
    "innerDispo"?: string,
    "separator"?: boolean,
    "isActive"?: boolean,
    "onClick"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseEnter"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseLeave"?: MouseEventHandler<HTMLElement> | undefined
};
/**
 * The type for the props the section component.
*/
export type SecAnalyst = BaseProps & {
    "content": SecAnalystLocalised,
    "innerDispo"?: string,
    "separator"?: boolean,
    "isActive"?: boolean,
    "onClick"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseEnter"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseLeave"?: MouseEventHandler<HTMLElement> | undefined,
    "onCardSelect": (card: CardData) => void,
    "setCardActive": (cardId: string) => void,
    "openViewer": (state: boolean) => void
};
/**
 * The type for the props the section component.
*/
export type SecInfo = BaseProps & {
    "content": SecInfoLocalised,
    "innerDispo"?: string,
    "separator"?: boolean,
    "isActive"?: boolean,
    "onClick"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseEnter"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseLeave"?: MouseEventHandler<HTMLElement> | undefined
};
/**
 * The type for the props the section component.
*/
export type SecDev = BaseProps & {
    "content": SecDevLocalised,
    "innerDispo"?: string,
    "separator"?: boolean,
    "isActive"?: boolean,
    "onClick"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseEnter"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseLeave"?: MouseEventHandler<HTMLElement> | undefined,
    "onCardSelect": (card: CardData) => void,
    "setCardActive": (cardId: string) => void,
    "openViewer": (state: boolean) => void
};
/**
 * The type for the props the section component.
*/
export type SecContact = BaseProps & {
    "content": SecContactLocalised,
    "innerDispo"?: string,
    "separator"?: boolean,
    "isActive"?: boolean,
    "onClick"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseEnter"?: MouseEventHandler<HTMLElement> | undefined,
    "onMouseLeave"?: MouseEventHandler<HTMLElement> | undefined
};
/**
 * The type for the switch component.
*/
export type Switch = Omit<BaseProps, "device"> & {
    "type"?: "button" | "reset" | "submit",
    "width": number,
    "height": number,
    "isChecked": boolean,
    "onChange"?: ChangeEventHandler<HTMLInputElement>,
    "onClick"?: MouseEventHandler<HTMLInputElement>
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
export type LanguagesMocked = jest.Mock<(availableLanguages?: Array<string>) => Array<string>>;
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
/** */
export type FormState = {
    "error"? : string,
    "message"?: string,
    "success"?: boolean
}
/** */
export type ParamsType = { "params": Promise<{ "lang": Locals }> };
/** */
export type RootLayoutProps = Readonly<{
    "children": ReactNode,
    "params": Promise<{ "lang": Locals }>
}>;
/** */
export type CardViewer = BaseProps & {
    "card": null | CardData,
    "activeCard": null | string,
    "onClose": () => void,
    "closeText": typeof import("@/lib/content/fr.json").utility.close
};
