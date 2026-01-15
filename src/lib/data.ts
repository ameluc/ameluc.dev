/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file data.ts
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains all the functions that will be used for important data obtention.
*/

import "server-only";
import type { ContentLocalised } from "@/lib/ameluc";

/**
 * This variable holds function for dynamic import that resolve to a certain default content
 * depending on the localisation.
*/
export const importations = {
    "en": () => import("@/content/en.json").then(module => module.default),
    "fr": () => import("@/content/fr.json").then(module => module.default)
};
/**
 * This function will help obtain the correct content depending on the local the user is using.
 *
 * @returns a localised module
*/
export async function getLocalContent(lang: keyof typeof importations): Promise<ContentLocalised> {
    return importations[lang]();
}
