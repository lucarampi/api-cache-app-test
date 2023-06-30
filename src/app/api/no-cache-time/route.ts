import { NextResponse } from 'next/server'

export const fetchCache = 'force-no-store'
// 'auto' | 'default-cache' | 'only-cache'
// 'force-cache' | 'force-no-store' | 'default-no-store' | 'only-no-store'

export async function GET() {
    const newDate = new Date().toUTCString().toString();
    return NextResponse.json({ date: newDate })
}