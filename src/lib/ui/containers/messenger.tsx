/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file messenger.tsx
 * @version 0.4.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
 *
 * This file contains the input component.
*/

"use client"

import type { ReactElement } from "react";
import type { FormState, Messenger } from "@/lib/ameluc";
import { useActionState, useState, ViewTransition } from "react";
import { Button } from "@/lib/ui/bases/button";
import { InputField } from "@/lib/ui/bases/input";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Messenger(props: Messenger): ReactElement {
    const [emailEntry, setEmailEntry] = useState<string>("");
    const [messageEntry, setMessageEntry] = useState<string>("");

    return (<form id={"message-form"} className={props.className}>
        <InputField className={`w-full h-auto rounded-2xl px-4 py-3 bg-slate-200`} name={"email"} required={true} placeholder={"Email"} type={"email"} value={emailEntry} onChange={(event) => setEmailEntry(event.target.value)} />
        <InputField className={`w-full h-auto rounded-2xl px-4 py-3 bg-slate-200`} name={"subject"} required={true} placeholder={"text"} type={"email"} value={emailEntry} onChange={(event) => setEmailEntry(event.target.value)} />
        <textarea className={`rounded-2xl px-4 py-3 resize-none bg-slate-200`} cols={32} rows={6} name={"message"} required={true} placeholder={props.localContent.textPlaceholder} value={messageEntry} onChange={(event) => setMessageEntry(event.target.value)} >
        </textarea>
        <div className={`w-full h-full mt-2 border-2 border-slate-100 rounded-2xl`}>
            <button className={`w-full h-full border-2 border-teal-100/0 rounded-2xl py-3 bg-teal-300 lg:cursor-pointer scale-90 transition lg:delay-100 lg:duration-150 lg:ease-in-out hover:scale-100 hover:border-teal-100`} type={"submit"}onClick={() => {}}>
                {props.localContent.buttonSend}
                <p className={`text-lg font-bold text-slate-100`}>{props.localContent.buttonSend}</p>
            </button>
            {/* {currentState.success && currentState.message && (<ViewTransition>
                <p>
                    {currentState.message}
                </p>
            </ViewTransition>)}
            {currentState.error && (<ViewTransition>
                <p>
                    {currentState.error}
                </p>
            </ViewTransition>)} */}
        </div>
    </form>);
}
