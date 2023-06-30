"use client";
import ClientTime from "@/components/ClientTime";
import CustomTime from "@/components/CustomTime";
import axios from "axios";

export interface TimeApiResponse {
  date: string;
}

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-start">
          <span>Client-side time </span>
          <ClientTime />
        </div>
        <div className="flex flex-col items-start">
          <span>Cached-API time</span>
          <CustomTime path="api/cache-time" />
        </div>
        <div className="flex flex-col items-start">
          <span>No-Cache-API time</span>
          <CustomTime path="api/no-cache-time" />
        </div>
      </div>
    </main>
  );
}
