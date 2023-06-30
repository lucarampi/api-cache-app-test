import { TimeApiResponse } from "@/app/page";
import axios from "axios";

export async function getTimeFromEndpoint(path: string) {
    let date: TimeApiResponse = { date: "Fetch error" };
    try {
        const { data } = await axios.get<TimeApiResponse>(path, {
            headers: {},
        });
        date = { ...data };
    } catch (error) {
        // console.log("🚀 ~ file: page.tsx:14 ~ getTimeFromEndpoint ~ error:", error);
    }
    return date;
}
