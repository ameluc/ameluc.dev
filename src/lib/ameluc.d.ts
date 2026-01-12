/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file ameluc.d.ts
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains all the type used in the application.
*/

/**
 * The type for the localised contents the app supports.
*/
export type LocalContent = {
    "title": string,
    "description": string,
    "header": {},
    "main": {},
    "footer": {}
}
/**
 * The type for the locals the app supports.
 * Actually only english and french locals are supported.
*/
export type LocalSupported = { "lang": "en" | "fr" };
