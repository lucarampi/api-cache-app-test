import { TimeApiResponse } from "@/app/page";
import axios from "axios";

export async function getTimeFromEndpoint(path: string, noCache: boolean = false) {
    let date: TimeApiResponse = { date: "Fetch error" };
    try {
        let res
        if (noCache) {
            res = await fetch(path, { cache: "no-store" });
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
