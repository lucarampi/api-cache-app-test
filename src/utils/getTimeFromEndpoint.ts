import { TimeApiResponse } from "@/app/page";
import axios from "axios";

export async function getTimeFromEndpoint(path: string, noCache: boolean = false) {
    let date: TimeApiResponse = { date: "Fetch error" };
    try {
        let res
        if (noCache) {
            res = await fetch(path, {
                headers: { "Cache-Control": " must-revalidate,no-cache,no-store" },
                cache: "no-store", next: { revalidate: 5 }
            });
        } else {
            res = await fetch(path);
        }
        const data: TimeApiResponse = await res.json()
        date = { ...data };
    } catch (error) {
        // console.log("🚀 ~ file: page.tsx:14 ~ getTimeFromEndpoint ~ error:", error);
    }
    return date;
}
