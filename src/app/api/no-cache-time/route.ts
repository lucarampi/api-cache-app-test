import { NextConfig, PageConfig } from 'next';
import { NextResponse, NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache';
export async function GET(req:NextRequest) {
    const path =req.nextUrl.searchParams.get("path")|| "/"
    console.log("🚀 ~ file: route.ts:6 ~ GET ~ path:", path)
    const newDate = new Date().toUTCString().toString();
    return NextResponse.json({ date: newDate })
}


