/**
 * @author Améluc Ahognidjè <ameluc.ahognidje@protonmail.com>
 * @file action.tsx
 * @version 0.1.0
 * @copyright CC BY-NC-ND 4.0
 * @sa <a href="https://www.blogsen.com">BlogSen</a>
 * @sa <a href="https://www.duofit.com">DuoFit</a>
 * @sa <a href="https://www.memoco.com">MemoCo</a>
 * @sa <a href="https://www.github.com/ameluc">Améluc's GitHub profile</a>
 * @sa <a href="https://www.linkedin.com/in/ameluc">Améluc's LinkedIn profile</a>
*/

"use server";

import { NextResponse, type NextRequest } from "next/server";

/** */
export async function POST(request: NextRequest) {
    const event = await request.json();

    if (event.type == "email.received") return NextResponse.json(event);

    return NextResponse.json({});
}
