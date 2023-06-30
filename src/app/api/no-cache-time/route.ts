import { NextConfig, PageConfig } from 'next';
import { NextResponse } from 'next/server'

export async function GET() {
    const newDate = new Date().toUTCString().toString();
    return NextResponse.json({ date: newDate })
}


