/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file input.tsx
 * @version 0.3.0
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
import type { BaseProps, InputProps, MessengerProps } from "@/lib/ameluc";
import { useState } from "react";
import { Button } from "@/ui/components/buttons";

/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Input(props: BaseProps & InputProps): ReactElement {
    return (<input
        id={props.id}
        className={props.className}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        ref={props.ref}
        required={props.required}
    />);
}
/**
 * The actual component that will be used elegantely.
 *
 * @returns a react element.
*/
export function Messenger(props: BaseProps & MessengerProps): ReactElement {
    const [emailEntry, setEmailEntry] = useState<string>("")
    const [messageEntry, setMessageEntry] = useState<string>("")

    return (<form id={"message-form"} className={props.className}>
        <Input className={""} name={"email"} placeholder={"Email"} type={"email"} value={emailEntry} onChange={(event) => setEmailEntry(event.target.value)} />
        <Input className={""} name={"message"} placeholder={props.localContent.textPlaceholder} type={"text"} value={messageEntry} onChange={(event) => setMessageEntry(event.target.value)} />
        <Button type={"submit"} text={props.localContent.button} onClick={() => {}}>
            <p>{props.localContent.button}</p>
        </Button>
    </form>);
}
