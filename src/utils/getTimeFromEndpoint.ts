import { TimeApiResponse } from "@/app/page";
import axios from "axios";

export async function getTimeFromEndpoint(path: string, noCache: boolean = false) {
    let date: TimeApiResponse = { date: "Fetch error" };
    try {
        const { data } = await axios.get<TimeApiResponse>(path, {
            headers: noCache ? {
                "Cache-Control": "must-revalidate,no-cache,no-store",
                "cache": "no-cache"
            } : {}

        });
        date = { ...data };
    } catch (error) {
        // console.log("🚀 ~ file: page.tsx:14 ~ getTimeFromEndpoint ~ error:", error);
    }
    return date;
}
