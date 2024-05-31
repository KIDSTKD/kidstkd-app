import db from "@/utils/pocketbase/auth";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json();
        console.log('form:', { username, password })
        const result = await db.authenticate(username, password);
        const {record, token} = result;
        record.token = token;
        cookies().set('pb_auth', db.client.authStore.exportToCookie());
      

        return NextResponse.json(record);
    } catch (err: any) {
        return new Response(
            JSON.stringify({ error: err.message || err.toString() }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    }
}

