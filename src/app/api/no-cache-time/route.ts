import { NextConfig, PageConfig } from 'next';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(req:NextRequest) {
    const path =req.nextUrl.searchParams.get("path")|| "/"
    const newDate = new Date().toUTCString().toString();
    return NextResponse.json({ date: newDate })
}